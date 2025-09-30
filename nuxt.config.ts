import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  vue: {
    propsDestructure: true,
  },
  // SEO Config for the entire app
  app: {
    head: {
      title: "Investment Proposal",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          href: "",
          rel: "icon",
          type: "image/x-icon",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap",
          rel: "stylesheet",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap",
          rel: "stylesheet",
        }
      ],
      script: [
        
      ],
    },
  },
});
