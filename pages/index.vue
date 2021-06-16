<template>
  <main class="content">
    <MainBanner :page-data="pageData" />
    <MainCases :page-data="pageData" />
    <MainServices :page-data="pageData" />
    <MainPrincip :page-data="pageData" />
    <MainAbout :page-data="pageData" />
    <TheForm />
    <TheContacts />
  </main>
</template>

<script>
import VueScrollTo from 'vue-scrollto'

import { mapState } from 'vuex'

export default {
  scrollToTop: true,
  async asyncData({ app, error }) {
    await app.store.dispatch('pageMain/loadPage', app.context.route.path)
    if (!app.store.state.pageMain.pageData) {
      error({ statusCode: 404 })
    }
  },
  head() {
    return {
      title: this.pageData.meta.page_title,
      meta: [
        { name: 'title', content: this.pageData.meta.meta_title },
        { name: 'description', content: this.pageData.meta.meta_description },
        { property: 'og:title', content: this.pageData.meta.meta_title },
        { property: 'og:description', content: this.pageData.meta.meta_description },
        { property: 'og:url', content: this.pageData.current_url },
        { property: 'og:image', content: `${this.pageData.current_domen}/images/og-share-img.jpg` }
      ],
      link: [{ rel: 'canonical', href: this.pageData.current_url }]
    }
  },
  computed: {
    ...mapState('pageMain', ['pageData'])
  },
  mounted() {
    document.querySelector('.header').classList.remove('header--hidden')
    if (localStorage.getItem('idBLock')) {
      const options = {
        offset: document.documentElement.clientWidth < 1024 ? 0 : -100
      }
      VueScrollTo.scrollTo(`#${localStorage.getItem('idBLock')}`, options)
      localStorage.removeItem('idBLock')
    }
  }
}
</script>
