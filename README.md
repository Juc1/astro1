# Astro Headless Frontend (with Tailwind CSS v4 & daisyUI v5)

A high-performance, modern headless frontend built with **Astro**, **Tailwind CSS v4**, and **daisyUI v5**, designed to decouple from CMS backends like **Drupal 11** or **WordPress**.

* **Live Production URL:** [https://astro1.jr5689.workers.dev](https://astro1.jr5689.workers.dev)
* **GitHub Repository:** [https://github.com/Juc1/astro1](https://github.com/Juc1/astro1)

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

## ⚡ Cloudflare Build & Deployment Configuration (Settings for Successful Deploy)

When deploying this project to **Cloudflare (Workers & Pages Builds)**, the following settings are required:

### 1. Repository Configuration (`wrangler.json`)
The project root contains `wrangler.json` which maps the project to Cloudflare:
```json
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "astro1",
  "compatibility_date": "2026-11-09",
  "assets": {
    "directory": "./dist",
    "not_found_handling": "single-page-application"
  }
}
```

### 2. Cloudflare Dashboard Build Settings
* **Framework preset:** `None` / `Custom` (or `Astro`)
* **Build command:** `npm run build`
* **Deploy command (Production branch):** 
  ```bash
  npx wrangler deploy
  ```
* **Deploy command (Preview / Non-production branches):** 
  ```bash
  npx wrangler preview
  ```

### 3. Cloudflare Environment Variables
Under the project's **Environment variables** section:
* **Variable:** `NODE_VERSION`
* **Value:** `24` *(or `22.23.4`)*
> **Why this is critical:** Cloudflare's build runners default to Node 18 if not specified. Because Astro v7 enforces Node `>=22.23.4`, the build will fail unless `NODE_VERSION` is explicitly set to `24`.

### 4. Cloudflare API Token Permissions
The API token used for automated deployment requires:
* **Scope:** `Account` > `Cloudflare Pages` > `Edit` (Grant write access to Cloudflare Pages)
* **Account Resource:** `Include` > `All accounts` (or your specific Account ID)

---

## 🛠️ Local Installation & Development Commands

```bash
# 1. Ensure you are using Node 24+
nvm use 24

# 2. Install all dependencies
npm install

# 3. Start local development server (with live reload)
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
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── assets/                 # SVGs and static media
│   ├── components/             # Reusable UI components
│   │   ├── ArticleCard.astro   # Card component linking to /blog/[slug]
│   │   └── Welcome.astro       # Astro default welcome component
│   ├── data/                   # Data stores & schemas
│   │   └── articles.ts         # Structured mock articles (prepared for Drupal JSON:API)
│   ├── layouts/                # Base HTML page wrappers
│   │   └── Layout.astro        # daisyUI navbar, container, and footer
│   ├── pages/                  # File-based routing
│   │   ├── index.astro         # Homepage with hero section and 3-column card grid
│   │   └── blog/
│   │       └── [slug].astro    # Dynamic blog post template with breadcrumbs & comments
│   └── styles/                 # Global styles
│       └── global.css          # Loads @import "tailwindcss" and @plugin "daisyui"
├── astro.config.mjs            # Astro configuration (Vite plugins: tailwindcss)
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript configuration for Astro
├── wrangler.json               # Cloudflare Workers / Static Assets configuration
└── README.md                   # Project documentation and guide
```

---

## 🗺️ Implementation Roadmap

* [x] **Stage 1: Local Testbed** — Install Astro v7, Tailwind v4, daisyUI v5, and build mock article layout.
* [x] **Stage 2: Git & GitHub** — Initialized git repository and pushed to [https://github.com/Juc1/astro1](https://github.com/Juc1/astro1).
* [x] **Stage 3: Edge Hosting** — Deployed and running live on Cloudflare at [https://astro1.jr5689.workers.dev](https://astro1.jr5689.workers.dev).
* [ ] **Stage 4: Headless Drupal Connection** — Enable Drupal JSON:API and replace mock data with live Drupal articles and images.
