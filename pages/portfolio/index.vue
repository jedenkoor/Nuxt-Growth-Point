<template>
  <main class="content">
    <TheBreadcrumbs />
    <div class="portfolio margin-section">
      <div class="container">
        <h1 class="h1title">{{ pageData.meta.h1 }}</h1>
      </div>
      <form class="portfolio__filter portfolio-filter">
        <div class="container portfolio-filter__container">
          <ul class="portfolio-filter__list">
            <li
              class="portfolio-filter__item portfolio-filter-item"
              v-for="(item, index) in pageData.filter_items"
              :key="index"
            >
              <label class="portfolio-filter-item__label">
                <input
                  class="visually-hidden"
                  type="checkbox"
                  name="filterTYPE"
                  :value="index"
                  v-model="filters.filterTYPE"
                />
                <span>{{ item }}</span>
              </label>
            </li>
          </ul>
          <button class="portfolio-filter__reset" type="reset" @click.prevent="resetFilter" v-if="!disableReset">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6L17 17M6 17L17 6" />
            </svg>
            Сбросить фильтр
          </button>
        </div>
      </form>
      <div class="container">
        <CasesList :cases="items" />
      </div>
    </div>
    <TheForm />
    <TheContacts />
  </main>
</template>

<script>
import lodash from 'lodash'
import { mapState } from 'vuex'

const INITIAL_FILTERS = {
  filterTYPE: []
}

export default {
  scrollToTop: true,
  async asyncData({ app, error }) {
    await app.store.dispatch('pagePortfolio/loadPage', app.context.route.path)
    if (!app.store.state.pagePortfolio.pageData) {
      error({ statusCode: 404 })
    }
  },
  data() {
    return {
      filters: lodash.cloneDeep(INITIAL_FILTERS)
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
    ...mapState('pagePortfolio', ['pageData', 'items']),
    disableReset() {
      return Object.values(this.filters).some(item => {
        if (Array.isArray(item) && item.length) {
          return false
        }
        return true
      })
    }
  },
  watch: {
    filters: {
      handler() {
        this.$store.dispatch('pagePortfolio/filter', {
          url: this.$route.path,
          filter: this.filters
        })
      },
      deep: true
    }
  },
  mounted() {
    document.querySelector('.header').classList.remove('header--hidden')
  },
  methods: {
    resetFilter() {
      this.filters = lodash.cloneDeep(INITIAL_FILTERS)
    }
  }
}
</script>
