const pkg = require('./package');

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Arisa Hirata Front-end Developer, Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      {
        name: 'description',
        content:
          'With experience in front-end development, I’m looking to become a front-end developer who uses modern technology, such as React and other JavaScript framework to make user friendly world changing applications to help society.'
      },
      {
        name: 'keyword',
        content:
          'Arisa Hirata, arisahirata, developer, software developer, web developer, arisa, hirata, Vancouver web developer, React, Vue, JavaScript, front-end developer, front end engineer, software engineer, designer UI UX designer, penguin, pirata, BCIT, D3, portfolio, 2019'
      },
      {
        name: 'author',
        content: 'Arisa Hirata'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/styles/main.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-scrollto', { src: '~/plugins/aos.js', ssr: false }],

  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    // publicPath: '/',
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
