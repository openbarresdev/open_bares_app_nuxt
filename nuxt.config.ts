import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },

  nitro: {
    routeRules: {
      "/**": {
        headers: {
          "Content-Security-Policy":
            "default-src 'self' https: data: blob: 'unsafe-inline' 'unsafe-eval';",
        },
      },
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  vue: {
    propsDestructure: true,
  },

  runtimeConfig: {
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    JWT_SECRET: process.env.JWT_SECRET,

    public: {
      // baseURL: process.env.BASE_URL || "",
      // apiKey: process.env.API_KEY || "",

      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      AUTH_ORIGIN: process.env.AUTH_ORIGIN || "http://localhost:3000",
    },
    private: {},
  },

  // SEO Config for the entire app
  app: {
    head: {
      title: "Crownhill Funding ||  Get investments quickly and safety",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          href: "/logo-icon.svg",
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
        },
      ],

      script: [
        {
          src: "",
          defer: "true",
          tagPosition: "bodyClose",
        },
      ],
    },
  },
});
