// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  alias: {
    "@": "/<srcDir>"
  },
  css: ["~/assets/main.css"],
  modules: ["@primevue/nuxt-module", "@nuxt/image", "@nuxt/icon"],
  // icon: {
  //   size: '1rem',
  //   serverBundle: {
  //     collections: ['mingcute']
  //   }
  // },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/primeflex@latest/primeflex.css'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap'
        },
      ],
    }
  },
})