export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  locales: ['en', 'pt', 'es'],
  messages: {
    en: {
      welcome: 'Welcome',
    },
    pt: {
      welcome: 'Bem-vindo',
    },
    es: {
      welcome: 'Bienvenido',
    },
  },
}));
