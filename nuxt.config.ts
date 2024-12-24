// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/supabase',
    '@unlok-co/nuxt-stripe',
    '@nuxtjs/i18n',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/prismic',
    '@zadigetvoltaire/nuxt-gtm',
  ],
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
  supabase: {
    url: process.env.SUPABASE_PROJECT_URL,
    key: process.env.SUPABASE_API_KEY,
  },
  stripe: {
    server: {
      key: process.env.STRIPE_SECRET_KEY,
      options: {},
    },
    client: {
      key: process.env.STRIPE_PUBLIC_KEY,
      options: {},
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts',
  },
  prismic: {
    endpoint: process.env.PRISMIC_PROJECT_URL,
  },
  site: {
    url: process.env.APP_URL,
    name: process.env.APP_NAME,
  },
  robots: {
    allow: '/',
    disallow: ['/admin'],
    sitemap: `${process.env.APP_URL}/sitemap.xml`,
  },
  gtm: {
    id: process.env.GOOGLE_TAG_MANAGER_ID ?? '',
    enableRouterSync: true,
    queryParams: {
      gtm_auth: 'init',
      gtm_cookies_win: 'init',
      gtm_preview: 'init',
    },
  },
});
