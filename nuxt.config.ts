// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false, 
  nitro: {
    preset: 'vercel',
  },
  build: {
    transpile: ['naive-ui', '@css-render/vue3-ssr'],
  }
})
