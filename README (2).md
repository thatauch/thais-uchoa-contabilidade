# Thais Uchôa — Assessoria Contábil

Site institucional (Home) da Thais Uchôa Assessoria Contábil. HTML, CSS e JavaScript puros, pronto para publicação no GitHub Pages.

## Estrutura de pastas

```
├── index.html          → Página Home
├── css/
│   └── styles.css      → Estilos (design tokens em :root)
├── js/
│   └── main.js          → Menu mobile, accordion, calculadora do MEI, formulário → WhatsApp
├── assets/
│   └── icons/
│       └── favicon.svg
├── robots.txt
└── sitemap.xml
```

## Dados já configurados

- **WhatsApp**: `5511925046254` em todos os botões (header, hero, CTA final, botão flutuante, planos, delivery, contato e rodapé), com mensagem automática pré-preenchida.
- **Instagram**: `https://www.instagram.com/thatauch.assessoria/` no header, na seção Contato e no rodapé.
- **Avaliações Google**: link de avaliação `https://g.page/r/CX_mp3Mm33xfEBM/review` na seção "Avaliações" e no rodapé.
- **Formulário de lead** (Nome + WhatsApp): ao enviar, monta automaticamente a mensagem:
  > Olá, Thais!
  > Meu nome é [Nome].
  > Meu WhatsApp é [Telefone].
  > Encontrei seu site e gostaria de solicitar minha análise gratuita.

## Ainda vale revisar antes de publicar

1. **E-mail de contato**: `contato@thaisuchoa.com.br` (seção Contato e rodapé) — troque se usar outro e-mail.
2. **Domínio**: as tags `canonical`, Open Graph e `sitemap.xml` estão com `https://thaisuchoa.com.br/` — troque pelo domínio real assim que definido.
3. **Imagem para Open Graph**: o `og:image` aponta para `assets/og-image.jpg`, que ainda não existe. Adicione uma imagem 1200×630px nesse caminho para que o link do site fique bonito quando compartilhado.
4. **Avaliações de exemplo**: os 3 depoimentos da seção "Avaliações" são ilustrativos — substitua pelos comentários reais do Google Meu Negócio quando quiser.

## Publicando no GitHub Pages

1. Crie um repositório no GitHub (ex: `thais-uchoa-site`).
2. Suba todos os arquivos desta pasta para a raiz do repositório (ou para uma branch/pasta `docs`, como preferir).
3. No repositório: **Settings → Pages → Source**, selecione a branch e a pasta (`/` ou `/docs`).
4. Aguarde alguns minutos — o GitHub vai gerar uma URL do tipo `https://usuario.github.io/thais-uchoa-site/`.
5. Se for usar um domínio próprio, configure em **Settings → Pages → Custom domain** e ajuste o DNS conforme a documentação do GitHub.

## Funcionalidades incluídas

- **Menu mobile** com botão hambúrguer.
- **Accordion** de Serviços e FAQ (JS puro, sem dependências).
- **Calculadora do MEI**: estima o DAS mensal e compara o faturamento anual projetado com o limite do MEI (R$ 81.000). Os valores de DAS são simplificados para fins educativos — vale revisar periodicamente conforme a legislação vigente.
- **Formulário de lead** (Nome + WhatsApp) que redireciona automaticamente para uma conversa no WhatsApp com mensagem pré-preenchida.
- **Botão flutuante do WhatsApp**, fixo no canto inferior direito.
- **Scroll reveal**: elementos aparecem suavemente ao rolar a página (respeita `prefers-reduced-motion`).
- **SEO**: title, meta description, Open Graph, Twitter Card, Schema.org (`AccountingService`), sitemap.xml, robots.txt e HTML semântico.

## Próximas páginas (ainda não incluídas)

Este pacote cobre a **Home**. As páginas internas (Sobre, Serviços completo, Blog, FAQ dedicado, Contato) podem ser construídas na sequência, reaproveitando os mesmos `css/styles.css` e `js/main.js` — é só avisar.

## Paleta e tipografia (para manter consistência em novas páginas)

- Cores: off-white `#FAF6F0`, bege `#E6DCC8` / `#F1EADA`, chumbo `#2B2824`, vinho `#6E2A3A`, dourado utilitário `#A9865A`.
- Tipografia: **Fraunces** (títulos), **Inter** (corpo), **IBM Plex Mono** (números e dados, como valores de DAS e faturamento).
