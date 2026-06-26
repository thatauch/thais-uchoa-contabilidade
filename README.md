# Thaís Uchôa Assessoria — Site Oficial

Site institucional estático (HTML5 + CSS3 + JavaScript puro), pronto para publicação no GitHub Pages.

## Estrutura

```
index.html        → Estrutura e conteúdo da página
styles.css        → Todo o estilo visual
script.js         → Interatividade (menu, FAQ, modais, animações)
assets/
  thais.jpg       → Foto da Hero (fallback)
  thais.webp      → Foto da Hero (formato otimizado, carrega primeiro)
```

## Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub (ex: `thais-uchoa-site`).
2. Envie todos os arquivos desta pasta para a raiz do repositório (mantendo a pasta `assets/` junto).
3. No repositório, vá em **Settings → Pages**.
4. Em "Branch", selecione `main` (ou `master`) e a pasta `/ (root)`. Clique em **Save**.
5. Em alguns minutos o GitHub vai gerar um link tipo:
   `https://seu-usuario.github.io/thais-uchoa-site/`

Não é necessário build, instalação de dependências ou configuração adicional — é tudo estático.

## Personalizações rápidas

- **Trocar número/mensagem do WhatsApp**: procure por `5511925046254` em `index.html` (aparece no menu, hero, botão flutuante, CTA final e modais) e pelo texto após `?text=`.
- **Trocar a foto**: substitua `assets/thais.jpg` e `assets/thais.webp` mantendo os mesmos nomes, ou ajuste o caminho no `<picture>` da Hero Section.
- **Domínio próprio**: se for usar um domínio customizado (ex: thaisuchoa.com.br), crie um arquivo `CNAME` na raiz do repositório com o domínio dentro, e configure o DNS conforme a documentação do GitHub Pages.

## Notas técnicas

- Mobile-first, totalmente responsivo.
- Sem frameworks (sem Bootstrap/Tailwind) — código limpo e leve.
- SEO: meta tags, Open Graph e Schema.org (LocalBusiness) já configurados.
- Acessibilidade: navegação por teclado, foco visível, `aria-*` nos componentes interativos (menu, FAQ, modais).
- Performance: imagem da Hero otimizada (WebP com fallback JPG), sem dependências externas pesadas.
