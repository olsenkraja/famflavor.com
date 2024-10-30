export default defineNuxtConfig({
  compatibilityDate: '2024-08-19',
  modules: ['@nuxtjs/ionic'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css', '~/assets/css/ionic.css'],
  ionic: {
    // integrations: {
    //   icons: true,
    //   meta: true,
    //   pwa: true,
    //   router: true,
    // },
    // css: {
    //   core: true,
    //   basic: true,
    //   utilities: false,
    // },
  },
})
