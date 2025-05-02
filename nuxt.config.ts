import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },

  css: ['~/assets/styles/main.css'],

  runtimeConfig: {
    public: {
      appUrl: process.env.APP_URL,
    },
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },

  routeRules: {
    '/admin/**': { ssr: false },
  },

  vite: {
    plugins: [
      tailwindcss(),
    ]
  },

  future: {
    compatibilityVersion: 4
  },

  modules: ['nuxt-auth-utils']
})