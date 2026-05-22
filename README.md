# Sislógica — Landing Page

Landing page institucional da **Sislógica**. O site apresenta os serviços, diferenciais e canais de contato da empresa com uma interface moderna, responsiva e com suporte a tema claro/escuro.

## Conteúdo

- **Home / Hero** — Apresentação da marca com background gradiente e identidade visual
- **Serviços** — Módulos do sistema TMS (Roteirizador, First/Last Mile, WhatsApp, SAC, Dashboards etc.) com pop-ups detalhados e navegação entre cards
- **SISEDI** — Middleware de integração com 3 collapses explicativos sobre cenários de integração
- **Quem Somos** — Sobre a empresa, diferenciais e cards de Equipe, Missão, Valores e Infraestrutura
- **Clientes** — Grid com 14 logos de clientes e parceiros
- **Contato** — WhatsApp, endereço, e-mail, mapa interativo e branding

## Arquitetura

```
├── index.html           # Página única com todas as seções
├── css/
│   └── style.css        # Estilos completos (dark + light mode, responsivo)
├── js/
│   └── main.js          # Scroll spy, modal de serviços, collapse SISEDI, theme toggle
├── assets/
│   ├── imgs/            # Backgrounds e imagens do hero
│   ├── icons/           # Ícones SVG (checklist, pessoa, mundo, etc.)
│   └── logos-vectors/   # Logos dos clientes em SVG/PNG
└── assets/*.png         # Imagens de header dos cards do modal
```

### Stack

- **HTML5** semântico com seções, headings e landmarks
- **CSS3** puro — sem frameworks ou pré-processadores
- **JavaScript** vanilla — sem dependências externas
- **Google Fonts** (Inter + Montserrat)

## Boas práticas aplicadas

- **Dark / Light mode** com alternância via `classList.toggle` e persistência de transições suaves
- **Responsividade** com 4 breakpoints (1150px, 1024px, 768px, 480px)
- **Modal acessível** com navegação por setas, teclado (←/→/Esc) e `aria-label`
- **Scroll spy** nativo sem bibliotecas, destacando o link da seção ativa na navbar
- **Animação `prefers-reduced-motion`** para respeitar preferências de acessibilidade
- **DRY** — backgrounds dos cards do modal abstraídos em classe única `.hero-bg` com imagem injetada via JS
- **Imagens responsivas** com `background-size: contain/cover` e `object-fit`
- **HTML semântico** com `<section>`, `<nav>`, `<h1>`–`<h4>`, `<ul>`, `<button>` nos lugares corretos

## Como usar

Basta abrir o arquivo `index.html` no navegador:

```bash
start index.html
```

Nenhum build tool ou servidor é necessário.
