// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@nuxtjs/i18n",
  ],
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
  },
  i18n: {
    /* module options */
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en-US",
        iso:"en-US",
        name:"EN",
        file:"en-US.json"
      },
      {
        code: "id-IDN",
        iso: "id-IDN",
        name: "ID",
        file: "id-IDN.json"
      }
    ],
    defaultLocale: "id-IDN",
    vueI18n:{
      fallbackLocale: "id-IDN",
    }
  },
  // css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // colorMode: {
  //   preference: "light",
  //   fallback: "light",
  //   hid: "app-theme",
  //   globalName: "__APP_THEME__",
  //   classPrefix: "",
  //   classSuffix: "",
  //   storageKey: "app-theme",
  // },
});
