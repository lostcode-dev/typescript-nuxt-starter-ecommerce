// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      siteName: process.env.SITE_NAME,
      siteDescription: process.env.SITE_DESCRIPTION,
      socialCard: process.env.SOCIAL_CARD,
    },
  },
  dir: {
    pages: 'app/pages',
    layouts: 'app/layouts',
    middleware: 'app/middleware',
    plugins: 'app/plugins',
  },

  modules: ['@nuxt/eslint', '@vueuse/nuxt', '@nuxtjs/prismic', '@nuxt/image', '@nuxt/ui', '@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  compatibilityDate: '2024-11-01',

  typescript: {
    typeCheck: true,
  },

  eslint: {
    checker: true,
    config: {
      stylistic: false,
    },
  },

  prismic: {
    endpoint: process.env.PRISMIC_PROJECT_URL,
  },
});
