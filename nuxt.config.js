export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/Kazanmarathon/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Казанский марафон',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/styles/_variables.scss',
    '~assets/styles/mixins.scss',
    '~assets/styles/font.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-carousel'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  ssr: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/gtm',
  ],
  gtm: {
    id: 'GTM-WNDHBBZ'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
