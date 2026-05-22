# Portfólio — Deyvson Lucas

Portfólio pessoal, Desenvolvedor Full Stack. Página única (single-page) moderna, com tema dark, animações suaves e design responsivo, apresentando projetos, habilidades e formas de contato.

🔗 **Acesse:** abra o arquivo [`index.html`](index.html) no navegador.

---

## ✨ Recursos

- **Tema dark moderno** com gradientes, glassmorphism e orbs animados de fundo
- **Totalmente responsivo** — adapta-se a desktop, tablet e celular
- **Animações de revelação** ao rolar a página (`IntersectionObserver`)
- **Contador animado** nas estatísticas
- **Menu mobile** (hambúrguer)
- **Formulário de contato** que abre o app de email com a mensagem pré-preenchida
- **Acessibilidade** — respeita `prefers-reduced-motion` e usa HTML semântico
- **SEO básico** — meta tags de descrição e Open Graph

---

## 🧱 Tecnologias

Construído com tecnologias web puras, sem dependências ou build:

- **HTML5** — estrutura semântica
- **CSS3** — variáveis, grid, flexbox, animações
- **JavaScript (vanilla)** — interações e animações
- **Google Fonts** — Sora e Inter

---

## 📁 Estrutura do projeto

```
Meu-Portfolio/
├── index.html        # Estrutura e conteúdo da página
├── styles.css        # Estilos (tema dark, layout, responsivo)
├── script.js         # Interações, animações e formulário
├── assets/
│   └── deyvson.jpg   # Foto de perfil (adicionar manualmente)
└── README.md
```

---

## 🗂️ Seções

| Seção | Descrição |
|---|---|
| **Hero** | Apresentação, chamada para ação e foto de perfil |
| **Estatísticas** | Números em destaque com contador animado |
| **Sobre mim** | Apresentação profissional e card de perfil |
| **Projetos** | Trabalhos selecionados com links e stack de cada um |
| **Habilidades** | Back-end, Front-end, Banco de dados e Ferramentas |
| **Contato** | Email, WhatsApp, GitHub e formulário de mensagem |

---

## 🚀 Projetos em destaque

| Projeto | Descrição | Link |
|---|---|---|
| **GLTEC Informática** | Plataforma para assistência e loja de informática, com módulo de PDV Expresso | [Acessar](https://gltec-informatica.vercel.app/) · [PDV](https://gltec-informatica.vercel.app/pdv-expresso) |
| **Busque Rápido** | Plataforma de busca para conectar usuários a serviços e produtos | [Acessar](http://busquerapido.com.br/) |
| **Catálogo de Serviços GLTEC** | Catálogo digital de serviços, organizado e fácil de navegar | [Acessar](https://catalogo-de-servicos-gltec.vercel.app/) |
| **Salão Izzas** | Site institucional para salão de beleza, com identidade visual própria | [Acessar](http://salaoizzas.com.br/) |

---

## ▶️ Como executar localmente

Não há build nem instalação. Basta abrir o arquivo HTML:

1. Clone ou baixe este repositório
2. Abra `index.html` no navegador (duplo clique)

Ou, se preferir um servidor local:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve
```

Depois acesse `http://localhost:8000`.

---

## 🖼️ Adicionando a foto de perfil

A foto não vem incluída. Para exibi-la:

1. Salve sua foto como **`deyvson.jpg`**
2. Coloque na pasta **`assets/`** → caminho final: `assets/deyvson.jpg`
3. Atualize a página (F5)

Enquanto a foto não existir, a página exibe automaticamente as iniciais **"DL"** como fallback — então nunca fica quebrada.

---

## 🛠️ Personalização

| O que mudar | Onde |
|---|---|
| Textos, projetos e seções | `index.html` |
| Cores, fontes e layout | `styles.css` (variáveis no topo, em `:root`) |
| Animações e comportamento | `script.js` |
| Link do GitHub | `index.html` (seção de contato) |

As cores principais ficam centralizadas em variáveis CSS no início de `styles.css`:

```css
:root {
  --brand: #7c5cff;
  --brand-2: #18d6c9;
  --accent: #ff5c8a;
}
```

---

## 📬 Contato

- **Email:** deyvlucas02@gmail.com
- **WhatsApp:** (87) 99195-8156

---

<p align="center">Feito por <strong>Deyvson Lucas</strong> — Desenvolvedor Full Stack</p>
