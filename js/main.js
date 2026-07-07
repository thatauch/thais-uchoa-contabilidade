/* ==========================================================================
   THAIS UCHÔA — ASSESSORIA CONTÁBIL
   JavaScript principal: menu mobile, accordion, calculadora do MEI,
   formulário de lead -> WhatsApp, revelação ao rolar a página.
   ========================================================================== */

(function () {
  "use strict";

  var WHATSAPP_NUMBER = "5511925046254";

  /* ---------------- Ano no rodapé ---------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- Menu mobile ---------------- */
  var header = document.getElementById("site-header");
  var menuToggle = document.getElementById("menu-toggle");
  var mainNav = document.getElementById("main-nav");

  if (menuToggle && header) {
    menuToggle.addEventListener("click", function () {
      var isOpen = header.classList.toggle("nav-open");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("nav-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------- Accordions (Serviços e FAQ) ---------------- */
  function setupAccordion(rootSelector) {
    var root = document.querySelector(rootSelector);
    if (!root) return;

    var triggers = root.querySelectorAll(".accordion-trigger");

    triggers.forEach(function (trigger) {
      var panel = trigger.nextElementSibling;

      // Estado inicial baseado no aria-expanded definido no HTML
      if (trigger.getAttribute("aria-expanded") === "true") {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } else {
        panel.style.maxHeight = "0px";
      }

      trigger.addEventListener("click", function () {
        var expanded = trigger.getAttribute("aria-expanded") === "true";

        trigger.setAttribute("aria-expanded", expanded ? "false" : "true");
        panel.style.maxHeight = expanded ? "0px" : panel.scrollHeight + "px";
      });
    });

    // Recalcula alturas ao redimensionar (evita cortes em telas menores)
    window.addEventListener("resize", function () {
      triggers.forEach(function (trigger) {
        var panel = trigger.nextElementSibling;
        if (trigger.getAttribute("aria-expanded") === "true") {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    });
  }

  setupAccordion("#services-accordion");
  setupAccordion("#faq-accordion");

  /* ---------------- Calculadora do MEI ---------------- */
  var calcButton = document.getElementById("calc-button");
  var calcRevenueInput = document.getElementById("calc-revenue");
  var calcActivityInput = document.getElementById("calc-activity");
  var calcResult = document.getElementById("calc-result");
  var calcDas = document.getElementById("calc-das");
  var calcAnnual = document.getElementById("calc-annual");
  var calcStatus = document.getElementById("calc-status");

  // Valores de referência (simplificados) para simulação educativa do DAS-MEI.
  var DAS_VALUES = {
    comercio: 76.9,  // INSS + ICMS
    servico: 80.9,   // INSS + ISS
    misto: 81.9      // INSS + ICMS + ISS
  };
  var MEI_ANNUAL_LIMIT = 81000;

  function formatBRL(value) {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  if (calcButton) {
    calcButton.addEventListener("click", function () {
      var monthly = parseFloat(calcRevenueInput.value);

      if (isNaN(monthly) || monthly <= 0) {
        calcRevenueInput.focus();
        calcRevenueInput.style.borderColor = "var(--color-vinho)";
        return;
      }
      calcRevenueInput.style.borderColor = "";

      var activity = calcActivityInput.value;
      var das = DAS_VALUES[activity] || DAS_VALUES.comercio;
      var annualProjected = monthly * 12;

      var statusText;
      if (annualProjected <= MEI_ANNUAL_LIMIT * 0.8) {
        statusText = "Dentro do limite";
      } else if (annualProjected <= MEI_ANNUAL_LIMIT) {
        statusText = "Perto do limite — vale planejar";
      } else {
        statusText = "Acima do limite do MEI";
      }

      calcDas.textContent = formatBRL(das);
      calcAnnual.textContent = formatBRL(annualProjected);
      calcStatus.textContent = statusText;
      calcResult.hidden = false;
    });
  }

  /* ---------------- Formulário de lead -> WhatsApp ---------------- */
  var leadForm = document.getElementById("lead-form");

  if (leadForm) {
    leadForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var nome = document.getElementById("lead-nome").value.trim();
      var whatsapp = document.getElementById("lead-whatsapp").value.trim();

      if (!nome || !whatsapp) return;

      var message =
        "Olá, Thais!\n" +
        "Meu nome é " + nome + ".\n" +
        "Meu WhatsApp é " + whatsapp + ".\n" +
        "Encontrei seu site e gostaria de solicitar minha análise gratuita.";

      var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
      window.open(url, "_blank", "noopener");
    });
  }

  /* ---------------- Revelação ao rolar a página ---------------- */
  var revealEls = document.querySelectorAll("[data-reveal]");

  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: exibe tudo imediatamente
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

})();
