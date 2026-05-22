# Sislógica Landing Page

## Stack
- HTML5 + CSS3 + vanilla JS
- Bootstrap 5 (via CDN)
- No build tools, no frameworks

## Estrutura
- `index.html` -- landing page completa (6 seções: hero, serviços, quem somos, clientes, contato, footer)
- `css/style.css` -- estilos dark mode, responsivo
- `js/main.js` -- scroll spy + form submit
- `assets/` -- recursos do Figma

## Assets (do Figma)
- `assets/logo_minimalista_branca.svg` -- logo principal (usar no navbar e footer)
- `assets/SISLOGICA.svg` -- texto "SISLOGICA" (hero + footer)
- `assets/soluções logísticas.svg` -- texto "soluções logísticas" (hero + footer)
- `assets/imgs/background-hero-newLogo-oldtypo.png` -- background do hero
- `assets/icons/checklist.svg` -- ícone de checklist (itens de serviço e diferenciais)
- `assets/icons/pessoa.svg` -- ícone equipe
- `assets/icons/mundo.svg` -- ícone missão
- `assets/icons/diamante.svg` -- ícone valores
- `assets/icons/nuvem.svg` -- ícone infraestrutura

## Cores (do Figma)
- Primária: `#5254af` (botões, bordas, hover states)
- Fundo escuro: `#0b0d10`, `#0f1217`, `#161a22`
- Texto: `#f5f5f5`, `#a0a5b0`, `#8a8f9a`

## Comandos
- Abrir no navegador: `start index.html` (Windows) ou `npx serve .`
- Não há bundler, test runner ou linter configurados

## Convenções
- Dark mode em todo o site
- Fonte: `'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif`
- SVGs inline ou via `<img>` (sem dependências externas)
- Responsivo com 3 breakpoints: 1024px, 768px, 480px
