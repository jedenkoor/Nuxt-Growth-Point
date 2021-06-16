export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'robots', content: 'index, follow' },

      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Growth Point' },
      { property: 'og:image:width', content: '1800' },
      { property: 'og:image:height', content: '945' },
      { name: 'msapplication-TileColor', content: '#a67ef9' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/favicon/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon/favicon-16x16.png' },
      { rel: 'manifest', href: '/images/favicon/site.webmanifest' },
      { rel: 'mask-icon', color: '#959595', href: '/images/favicon/safari-pinned-tab.svg' }
    ]
  },

  router: {
    prefetchLinks: false
  },

  pageTransition: 'fade',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css/normalize.css',
    // swiper style
    'swiper/css/swiper.css',
    '@/assets/styles/global.scss',
    '@/assets/styles/build.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
    { src: '@plugins/v-mask.js', mode: 'client' },
    { src: '@plugins/vuelidate.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
