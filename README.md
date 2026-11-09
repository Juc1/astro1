# Astro Headless Frontend (with Tailwind CSS v4 & daisyUI v5)

A high-performance, modern headless frontend built with **Astro**, **Tailwind CSS v4**, and **daisyUI v5**, designed to decouple from CMS backends like **Drupal 11** or **WordPress**.

---

## 📋 System Requirements & Prerequisite Versions

Astro v7 and Tailwind v4 require a modern Node.js runtime:

| Requirement | Supported Version | Notes |
| :--- | :--- | :--- |
| **Node.js** | `>= 22.23.4` (or **Node v24+**) | Node v24.9.0 is recommended and installed locally via NVM |
| **npm** | `>= 10.0.0` | Included with Node v24 |

> **Note on NVM:** If your terminal defaults to an older Node version, switch to Node 24 before running commands:
> ```bash
> nvm use 24
> ```

---

## 📦 Installed Packages & Versions

This project uses the following core dependencies:

* **Astro:** `^7.4.8` (Zero-JS-by-default component framework)
* **Tailwind CSS:** `^4.3.5` (Vite-native engine via `@tailwindcss/vite`)
* **daisyUI:** `^5.7.50` (Semantic component classes for Tailwind v4)

---

## 🛠️ Installation & Setup Commands

To set up this project on any machine from scratch:

```bash
# 1. Ensure you are using Node 24+
nvm use 24

# 2. Install all dependencies
npm install

# 3. Start the local development server (with live reload)
npm run dev
# The site is now accessible at http://localhost:4321

# 4. Build the production-ready static bundle
npm run build
# Compiles optimized HTML/CSS to the ./dist/ folder

# 5. Preview the production build locally
npm run preview
```

---

## 📁 Project Structure

```text
/
├── public/                     # Static public assets (favicons, images)
│   └── favicon.svg
├── src/
│   ├── components/             # Reusable UI components
│   │   └── ArticleCard.astro   # Responsive article card (prepared for Drupal JSON:API)
│   ├── layouts/                # Page wrappers
│   │   └── Layout.astro        # Base layout with daisyUI navbar, container, and footer
│   ├── pages/                  # File-based routing
│   │   └── index.astro         # Homepage with hero section and mock articles grid
│   └── styles/                 # Global styles
│       └── global.css          # Loads @import "tailwindcss" and @plugin "daisyui"
├── astro.config.mjs            # Astro configuration (Vite plugins: tailwindcss)
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript configuration for Astro
└── README.md                   # Project documentation and guide
```

---

## 🗺️ Implementation Roadmap

* [x] **Stage 1: Local Testbed** — Install Astro v7, Tailwind v4, daisyUI v5, and build mock article layout.
* [ ] **Stage 2: Git & GitHub** — Initialize local git repository, commit files, and push to GitHub.
* [ ] **Stage 3: Edge Hosting** — Connect GitHub repository to **Cloudflare Pages** or **Cloudways Velocity** for automated production deployments.
* [ ] **Stage 4: Headless Drupal Connection** — Enable Drupal JSON:API and replace mock data with live Drupal articles and images.
