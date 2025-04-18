// https://nuxt.com/docs/api/configuration/nuxt-config
import { projects } from './shared/projects';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ["~/assets/main.css"],
  modules: [
    "@primevue/nuxt-module",
    "@nuxt/image",
    "@nuxt/icon",
    '@nuxtjs/seo',
    'nuxt-vitalizer',
    'nuxt-booster',
    '@nuxtjs/fontaine',
    'nuxt-anchorscroll',
    '@nuxt/scripts',
    '@nuxt/fonts',
    '@zadigetvoltaire/nuxt-gtm'
  ],
  primevue: {
    components: {
      include: []
    }
  },
  fonts: {
    defaults: {
      weights: [400, 500, 700, 900],
    }
  },
  icon: {
    size: '1rem',
    serverBundle: {
      collections: ['mingcute']
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/primeflex@latest/primeflex.css'
        },
      ],
    }
  },
  gtm: {
    id: 'GTM-MJG2JDK2',
    enabled: true,
    loadScript: true
  },
  build: {
    transpile: ['aatjs']
  },
  site: {
    url: 'https://limedevs.com',
    name: 'Lime Devs',
    description: 'Innovating with custom software and hardware solutions to drive growth for startups and established businesses',
    defaultLocale: 'en',
  },
  booster: {
    detection: {
      performance: true,
      browserSupport: true,
      battery: true
    },
    performanceMetrics: {
      timing: {
        fcp: 800,
        dcl: 1200
      }
    },
    lazyOffset: {
      component: '0%',
      asset: '0%'
    }
  },
  image: {
    screens: {
      default: 320,
      xxs: 480,
      xs: 576,
      sm: 768,
      md: 996,
      lg: 1200,
      xl: 1367,
      xxl: 1600,
      '4k': 1921
    },
    domains: ['img.youtube.com', 'i.vimeocdn.com'],
    alias: {
      youtube: 'https://img.youtube.com',
      vimeo: 'https://i.vimeocdn.com',
    }
  },
  vitalizer: {
    disableStylesheets: 'entry',
    disablePrefetchLinks: true
  },
  generate: {
    routes: projects.map(project => `/projects/${project.slug}`),
  },
})