// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  dir: {
    pages: 'app/pages',
    layouts: 'app/layouts',
    middleware: 'app/middleware',
  },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@vueuse/nuxt'],
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
});
