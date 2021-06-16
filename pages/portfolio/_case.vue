<template>
  <main class="content">
    <TheBreadcrumbs />
    <div class="case margin-section">
      <div class="container">
        <h1 class="h1title">{{ pageData.meta.h1 }}</h1>
      </div>

      <div class="case__tags case-tags">
        <div class="container">
          <ul class="case-tags__list">
            <li class="case-tags__item case-tags-item" v-for="(item, index) in pageData.item.work_types" :key="index">
              <div class="case-tags-item__link">{{ item }}</div>
            </li>
            <li class="case-tags__item case-tags-item" v-if="pageData.item.site_url">
              <a class="case-tags-item__link" :href="pageData.item.site_url" target="_blank">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.5 10.5L5.32843 13.6716C4.79799 14.202 4.5 14.9214 4.5 15.6716C4.5 17.2337 5.76633 18.5 7.32843 18.5C8.07857 18.5 8.79799 18.202 9.32843 17.6716L12.5 14.5M14.5 12.5L17.6716 9.32843C18.202 8.79799 18.5 8.07857 18.5 7.32843C18.5 5.76633 17.2337 4.5 15.6716 4.5C14.9214 4.5 14.202 4.79799 13.6716 5.32843L10.5 8.5M8.5 14.5L14.5 8.5"
                  />
                </svg>
                Посетить сайт
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="case__content case-content">
        <div class="container">
          <div
            class="case-content__info case-content-info"
            v-if="pageData.item.client_task || pageData.item.project_object"
          >
            <div class="case-content-info__row" v-if="pageData.item.client_task">
              <h2 class="case-content-info__title">Клиент и задача</h2>
              <div class="case-content-info__text" v-html="pageData.item.client_task"></div>
            </div>
            <div class="case-content-info__row" v-if="pageData.item.project_object">
              <h2 class="case-content-info__title">Цель проекта</h2>
              <div class="case-content-info__text" v-html="pageData.item.project_object"></div>
            </div>
          </div>
        </div>

        <div class="case-content__part" v-if="pageData.item.slider.src">
          <div class="container">
            <div class="case-content__slider case-content-slider swiper" v-swiper="swiperOptions">
              <ul class="case-content-slider__wrapper swiper-wrapper">
                <li
                  class="case-content-slider__slide swiper-slide"
                  v-for="(item, index) in pageData.item.slider.resized_src"
                  :key="index"
                >
                  <picture>
                    <source type="image/webp" :srcset="pageData.item.slider.webp_src[index]" />
                    <img class="case-content-slider__img" :src="item" :alt="pageData.meta.h1" />
                  </picture>
                </li>
              </ul>
              <div class="swiper-scrollbar"></div>
              <div class="swiper-pagination"></div>
              <div class="swiper-button-prev">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.5 11.5L9.5 7.5M5.5 11.5L9.5 15.5M5.5 11.5H18" />
                </svg>
              </div>
              <div class="swiper-button-next">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 11.5L13.5 7.5M17.5 11.5L13.5 15.5M17.5 11.5H5" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <slot v-for="(item, index) in pageData.item.galery.resized_src">
          <div class="container" :key="pageData.item.galery.description[index]">
            <h2 class="case-content__title">{{ pageData.item.galery.description[index] }}</h2>
          </div>
          <div class="case-content__part" :key="index">
            <div class="container">
              <picture>
                <source type="image/webp" :srcset="pageData.item.galery.webp_src[index]" />
                <img class="case-content__img" :src="item" :alt="pageData.item.galery.description[index]" />
              </picture>
            </div>
          </div>
        </slot>
      </div>

      <div class="case__tags case-tags">
        <div class="container">
          <ul class="case-tags__list">
            <li class="case-tags__item case-tags-item" v-for="(item, index) in pageData.item.work_types" :key="index">
              <div class="case-tags-item__link">{{ item }}</div>
            </li>
            <li class="case-tags__item case-tags-item" v-if="pageData.item.site_url">
              <a class="case-tags-item__link" :href="pageData.item.site_url" target="_blank">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.5 10.5L5.32843 13.6716C4.79799 14.202 4.5 14.9214 4.5 15.6716C4.5 17.2337 5.76633 18.5 7.32843 18.5C8.07857 18.5 8.79799 18.202 9.32843 17.6716L12.5 14.5M14.5 12.5L17.6716 9.32843C18.202 8.79799 18.5 8.07857 18.5 7.32843C18.5 5.76633 17.2337 4.5 15.6716 4.5C14.9214 4.5 14.202 4.79799 13.6716 5.32843L10.5 8.5M8.5 14.5L14.5 8.5"
                  />
                </svg>
                Посетить сайт
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <TheForm />
    <TheContacts />
  </main>
</template>

<script>
import { directive } from 'vue-awesome-swiper'

import { mapState } from 'vuex'

export default {
  directives: {
    swiper: directive
  },
  scrollToTop: true,
  async asyncData({ app, error }) {
    await app.store.dispatch('pageCase/loadPage', app.context.route.path)
    if (!app.store.state.pageCase.pageData) {
      error({ statusCode: 404 })
    }
  },
  data() {
    return {
      swiperOptions: {
        spaceBetween: 15,
        slidesPerView: 1,
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next'
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          formatFractionCurrent(current) {
            return ('0' + current).slice(-2)
          },
          formatFractionTotal(total) {
            return ('0' + total).slice(-2)
          }
        },
        scrollbar: {
          el: '.swiper-scrollbar'
        }
      }
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
    ...mapState('pageCase', ['pageData'])
  },
  mounted() {
    document.querySelector('.header').classList.remove('header--hidden')
  }
}
</script>
