const pkg = require("./package");

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title:
      "Arisa Hirata Front-end Developer & UI UX Designer, BCIT D3 Portfolio",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
      {
        name: "description",
        content:
          "With experience in front-end development and UI/UX design, I’m looking to become a front-end developer and UI/UX designer who uses modern technology, such as React and other JavaScript framework to make user friendly world changing applications to help society."
      },
      {
        name: "keyword",
        content:
          "Arisa Hirata, arisahirata, developer, web developer front-end developer, designer UI UX designer, character design, graphic design, pirata, BCIT, D3, portfolio"
      },
      {
        name: "author",
        content: "Arisa Hirata"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: ["~/assets/styles/main.css", { src: "~assets/main.scss", lang: "scss" }],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/vue-scrollto", "~/plugins/scroll.js"],

  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    publicPath: "/",
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
