<p align="center">
  <img src="public/nuxt-js.jpg" alt="Nuxt.js TypeScript Starter">
</p>

<br />

<div align="center"><strong>Non-opinionated TypeScript starter for Nuxt.js</strong></div>
<div align="center">Highly scalable foundation with the best DX. All the tools you need to build your next project.</div>

<br />

<div align="center">
  <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&style=flat-square&color=5e17eb&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/github/license/jpedroschmitz/typescript-nextjs-starter?style=flat-square&color=5e17eb&labelColor=000000">
</div>

<div align="center">
  <sub>Created by <a href="https://www.linkedin.com/in/daniel-sf/">Daniel Soares</a>.</sub>
</div>

<br />

## Features

- ⚡️ Nuxt.js
- 🪧 Vue.js
- ⛑ TypeScript
- 📏 ESLint — To find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- 🐶 Husky — For running scripts before committing
- 🚓 Commitlint — To make sure your commit messages follow the convention
- 🚫 lint-staged — Run ESLint and Prettier against staged Git files
- 👷 PR Workflow — Run Type Check & Linters on Pull Requests
- ⚙️ EditorConfig - Consistent coding styles across editors and IDEs
- 🔗 Supabase - Provides a backend-as-a-service with real-time databases and authentication.
- 💳 Stripe - Enables secure and flexible payment integration.
- 🔐 Authentication - User authentication with options for social login, email/password, and more.
- 🛠️ BackOffice - An admin panel for managing products, orders, and customers.
- 🌍 i18n - Multilingual support for reaching global audiences.
- 🖼️ histoire - A visual storybook for building and testing Vue components interactively.
- 🤖 robots - Manage `robots.txt` to control search engine crawling.
- 🌐 sitemap - Automatically generate XML sitemaps for better indexing by search engines.
- 🔍 seo-meta - Simplifies the management of meta tags for products, categories, and pages.
- 📊 Google Analytics - Track user interactions and gain insights into site performance.
- 🔥 Hotjar - Heatmaps and session recordings to understand user behavior.
- 🛠️ Sentry - Real-time error tracking and performance monitoring.
- 📝 Prismic - A headless CMS for managing dynamic content, like product descriptions and blogs.
- 🔔 OneSignal - Push notification service for engaging users with real-time updates and offers.

### Development

To start the project locally, run:

```bash
pnpm dev
```

Open `http://localhost:3000` with your browser to see the result.

## Documentation

### Requirements

- Node.js >= 20
- pnpm 9

### Directory Structure

- [`.github`](.github) — GitHub configuration including the CI workflow.<br>
- [`.husky`](.husky) — Husky configuration and hooks.<br>
- [`public`](./public) — Static assets such as robots.txt, images, and favicon.<br>
- [`src`](./src) — Application source code, including pages, components, styles.

### Scripts

- `pnpm dev` — Starts the application in development mode at `http://localhost:3000`.
- `pnpm build` — Creates an optimized production build of your application.
- `pnpm start` — Starts the application in production mode.
- `pnpm typecheck` — Validate code using TypeScript compiler.
- `pnpm lint` — Runs ESLint for all files in the `src` directory.
- `pnpm lint:fix` — Runs ESLint fix for all files in the `src` directory.
- `pnpm format` — Runs Prettier for all files in the `src` directory.
- `pnpm format:check` — Check Prettier list of files that need to be formatted.
- `pnpm format:ci` — Prettier check for CI.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more information.
