// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/fonts',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  
  // Nuxt UI v4 configuration
  ui: {
    // Configure UI settings here
  },
  
  // Color mode configuration for wedding/photography theme
  colorMode: {
    preference: 'light', // Default to light mode for photography
  },
  
  // App metadata for wedding organizer project
  app: {
    head: {
      title: 'Reneo Wedding Organizer - Creating Unforgettable Moments',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professional wedding organizer services - Full wedding planning, venue decoration, photography, and more. Creating unforgettable moments for your special day.' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
})
