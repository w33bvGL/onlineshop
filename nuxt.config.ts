// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css", "~/assets/css/root.css"],

  modules: [
    "@nuxtjs/tailwindcss",
    "vue3-carousel-nuxt",
  ],

  devtools: { enabled: true },

  routeRules: {
    "/": { prerender: true },
  },

  ssr: true,
  components: true,

  compatibilityDate: "2024-07-18",
});
