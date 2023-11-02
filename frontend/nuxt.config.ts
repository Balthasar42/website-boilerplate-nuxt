// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from "@nuxt/kit"
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  modules: [
    "@vueuse/nuxt",
    "@nuxt/ui",
    "@nuxtjs/strapi",
    "@nuxtjs/google-fonts",
  ],
  strapi: {
    url: process.env.STRAPI_URL || "http://127.0.0.1:1337",
  },
  ui: {
    global: true,
  },
  tailwindcss: {
    cssPath: resolve("assets/css/tailwind.css"),
  },
  googleFonts: {
    download: true,
    preload: true,
    families: {
      Outfit: true,
      "Playfair+Display": true,
    },
  },
})
