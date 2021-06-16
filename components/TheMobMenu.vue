<template>
  <nav class="mobile-menu">
    <ul class="mobile-menu__list">
      <li class="mobile-menu__item">
        <a class="mobile-menu__link" href="/#services" @click.prevent="scrollToHeader">
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.944 4.5L9.858 4.93671L9.52901 6.53467C9.00301 6.73554 8.526 7.02037 8.095 7.35815L6.487 6.8205L6.05501 6.68658L5.83101 7.07233L4.724 8.9231L4.5 9.3089L4.828 9.5957L6.07201 10.654C6.02701 10.9308 5.96901 11.2046 5.96901 11.4954C5.96901 11.7862 6.02701 12.0601 6.07201 12.3369L4.828 13.3952L4.5 13.682L4.724 14.0677L5.83101 15.9186L6.05501 16.3053L6.487 16.1704L8.095 15.6328C8.526 15.9705 9.00301 16.2553 9.52901 16.4562L9.858 18.0541L9.944 18.4909H13.055L13.142 18.0541L13.47 16.4562C13.996 16.2553 14.473 15.9705 14.904 15.6328L16.512 16.1704L16.944 16.3053L17.169 15.9186L18.275 14.0677L18.5 13.682L18.171 13.3952L16.927 12.3369C16.973 12.0601 17.03 11.7862 17.03 11.4954C17.03 11.2046 16.973 10.9308 16.927 10.654L18.171 9.5957L18.5 9.3089L18.275 8.9231L17.169 7.07233L16.944 6.68658L16.512 6.8205L14.904 7.35815C14.473 7.02037 13.996 6.73554 13.47 6.53467L13.142 4.93671L13.055 4.5H9.944Z"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.4996 11.4954C13.4996 12.5987 12.6036 13.4941 11.4996 13.4941C10.3956 13.4941 9.49963 12.5987 9.49963 11.4954C9.49963 10.3921 10.3956 9.49677 11.4996 9.49677C12.6036 9.49677 13.4996 10.3921 13.4996 11.4954Z"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
          Услуги
        </a>
      </li>
      <li class="mobile-menu__item" @click.prevent="closeMenu">
        <nuxt-link class="mobile-menu__link" to="/portfolio/">
          <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.1016 7V6.5C10.1016 5.39543 10.997 4.5 12.1016 4.5C13.2061 4.5 14.1016 5.39543 14.1016 6.5V7M5.10156 10.5C8.80734 14.7352 15.3958 14.7352 19.1016 10.5M6.10156 7.5H18.1016C18.6538 7.5 19.1016 7.94772 19.1016 8.5V17.5C19.1016 18.0523 18.6538 18.5 18.1016 18.5H6.10156C5.54928 18.5 5.10156 18.0523 5.10156 17.5V8.5C5.10156 7.94772 5.54928 7.5 6.10156 7.5Z"
            />
          </svg>
          Портфолио
        </nuxt-link>
      </li>
      <li class="mobile-menu__item" @click.prevent="closeMenu">
        <nuxt-link class="mobile-menu__link" to="/">
          <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.6746 4.27891L5.1746 9.85034C5.06378 9.94533 5 10.0832 5 10.2291V17C5 17.8 5.66667 18 6 18H9.5C9.77614 18 10 17.7761 10 17.5V15C10 13.4 11.3333 13 12 13C13.6 13 14 14.3333 14 15V17.5C14 17.7761 14.2233 18 14.4994 18H18C18.8 18 19 17.3333 19 17V10.23C19 10.084 18.9362 9.94533 18.8254 9.85034L12.3254 4.27891C12.1382 4.11841 11.8618 4.11842 11.6746 4.27891Z"
            />
          </svg>
          Главная
        </nuxt-link>
      </li>
      <li class="mobile-menu__item">
        <button
          class="mobile-menu__link"
          @click.prevent="
            updatePopup([$event.target, 'BasePopupCallback'])
            closeMenu()
          "
        >
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.5 18.5H18.5V11.5C18.5 7.63401 15.366 4.5 11.5 4.5C7.63401 4.5 4.5 7.63401 4.5 11.5C4.5 15.366 7.63401 18.5 11.5 18.5Z"
            />
          </svg>
          Заявка
        </button>
      </li>
      <li class="mobile-menu__item">
        <button
          class="mobile-menu__link header__burger"
          :class="{ 'mobile-menu__link--active': openMenu }"
          @click.prevent="toggleMenu"
        >
          <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.8999 4.5H5.8999C5.34762 4.5 4.8999 4.94772 4.8999 5.5V9.5C4.8999 10.0523 5.34762 10.5 5.8999 10.5H9.8999C10.4522 10.5 10.8999 10.0523 10.8999 9.5V5.5C10.8999 4.94772 10.4522 4.5 9.8999 4.5Z"
            />
            <path
              d="M17.8999 4.5H13.8999C13.3476 4.5 12.8999 4.94772 12.8999 5.5V9.5C12.8999 10.0523 13.3476 10.5 13.8999 10.5H17.8999C18.4522 10.5 18.8999 10.0523 18.8999 9.5V5.5C18.8999 4.94772 18.4522 4.5 17.8999 4.5Z"
            />
            <path
              d="M17.8999 12.5H13.8999C13.3476 12.5 12.8999 12.9477 12.8999 13.5V17.5C12.8999 18.0523 13.3476 18.5 13.8999 18.5H17.8999C18.4522 18.5 18.8999 18.0523 18.8999 17.5V13.5C18.8999 12.9477 18.4522 12.5 17.8999 12.5Z"
            />
            <path
              d="M9.8999 12.5H5.8999C5.34762 12.5 4.8999 12.9477 4.8999 13.5V17.5C4.8999 18.0523 5.34762 18.5 5.8999 18.5H9.8999C10.4522 18.5 10.8999 18.0523 10.8999 17.5V13.5C10.8999 12.9477 10.4522 12.5 9.8999 12.5Z"
            />
          </svg>
          Меню
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
import VueScrollTo from 'vue-scrollto'

import { mapState, mapMutations } from 'vuex'

export default {
  head() {
    return {
      htmlAttrs: {
        class: [this.openMenu ? 'fixed' : '', this.getScrollbarWidth && this.openMenu ? 'compensate-for-scrollbar' : '']
      }
    }
  },
  computed: {
    ...mapState('commonHeader', ['openMenu'])
  },
  methods: {
    ...mapMutations('commonPopup', ['updatePopup']),
    ...mapMutations('commonHeader', ['toggleMenu', 'closeMenu']),
    scrollToHeader(e) {
      this.closeMenu()
      const id = e.target.getAttribute('href').split('#')[1] || ''
      const linkPathname = e.target.getAttribute('href').split('#')[0]
      const currentPathname = location.pathname
      if (id.length > 0 && currentPathname === linkPathname) {
        const options = {
          offset: document.documentElement.clientWidth < 1024 ? 0 : -100
        }
        VueScrollTo.scrollTo(`#${id}`, options)
      }
      if (currentPathname !== linkPathname) {
        localStorage.setItem('idBLock', id)
        this.$router.push({
          path: linkPathname
        })
      }
    }
  }
}
</script>
