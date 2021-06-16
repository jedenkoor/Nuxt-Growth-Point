<template>
  <section class="banner">
    <div class="container banner__container">
      <h1 class="banner__title" v-html="pageData.banner.title" />
      <p class="banner__text">
        {{ pageData.banner.text }}
      </p>
      <div class="banner__leftimg"></div>
      <div class="banner__right">
        <div class="banner__rightimg"></div>
        <nuxt-link class="banner__btn banner-btn" to="/portfolio/">
          <div class="banner-btn__bg"></div>
          <svg width="66" height="43" viewBox="0 0 66 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M44.2439 0L66 21.5L44.2439 43L40.7103 39.508L56.4341 23.9692H0V19.0308H56.4341L40.7103 3.49204L44.2439 0Z"
              fill="#1B1B1B"
            />
          </svg>
        </nuxt-link>
      </div>
    </div>
    <ul v-for="index in 4" :key="index" class="banner__line banner-line">
      <slot v-for="value in bannerServices[index - 1]" :index="value">
        <li
          v-for="(listItem, indexItem) in pageData.services"
          :key="`${index}${value}${indexItem}`"
          class="banner-line__item"
        >
          <a
            class="banner-line__link"
            href="#"
            tabindex="-1"
            :data-servicelink="listItem.name"
            @click.prevent="scrollToService"
          >
            {{ listItem.name }}
          </a>
        </li>
      </slot>
    </ul>
  </section>
</template>

<script>
import VueScrollTo from 'vue-scrollto'

export default {
  props: {
    pageData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      bannerServices: [4, 2, 1, 1]
    }
  },
  methods: {
    scrollToService(e) {
      document.querySelectorAll('[data-service]').forEach(item => item.classList.remove('services__item--active'))
      document.querySelector(`[data-service="${e.target.dataset.servicelink}"]`).classList.add('services__item--active')

      const element =
        document.documentElement.clientWidth < 1024 ? `[data-service="${e.target.dataset.servicelink}"]` : '#services'
      const options = {
        offset: document.documentElement.clientWidth < 1024 ? 0 : -100
      }
      VueScrollTo.scrollTo(element, options)
    }
  }
}
</script>
