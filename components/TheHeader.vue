<template>
  <header class="header" @scroll="toggleHeaderOnScroll">
    <div class="overlay" :class="{ 'overlay--menu': openMenu }" @click="toggleMenu"></div>
    <div class="container header__container">
      <nuxt-link class="header__logo" to="/" v-html="headerData.header.logo" />
      <div class="header__wrap" :class="{ 'header__wrap--active': openMenu }">
        <div class="header__top">
          <span class="header__title">Меню</span>
          <button class="header__close" @click.prevent="toggleMenu">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6L17 17M6 17L17 6" />
            </svg>
          </button>
        </div>
        <nav class="header__menu">
          <ul class="header__list header-list">
            <li v-for="(menuItem, index) in headerData.header.menu" :key="index" class="header-list__item">
              <a class="header-list__link" :href="menuItem.url" @click.prevent="scrollToHeader">
                {{ menuItem.title }}
              </a>
            </li>
          </ul>
        </nav>
        <button
          class="header__btn"
          @click.prevent="
            updatePopup([$event.target, 'BasePopupCallback'])
            closeMenu()
          "
        >
          Оформить заявку
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import VueScrollTo from 'vue-scrollto'

import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {
      directionScroll: []
    }
  },
  async fetch() {
    await this.loadHeader()
    await this.loadFooter()
  },
  computed: {
    ...mapState('commonHeader', ['headerData', 'openMenu'])
  },
  beforeMount() {
    window.addEventListener('scroll', this.toggleHeaderOnScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.toggleHeaderOnScroll)
  },
  methods: {
    ...mapMutations('commonPopup', ['updatePopup']),
    ...mapMutations('commonHeader', ['toggleMenu', 'closeMenu']),
    ...mapActions('commonHeader', ['loadHeader']),
    ...mapActions('commonFooter', ['loadFooter']),
    toggleHeaderOnScroll() {
      this.directionScroll.push(window.pageYOffset)
      if (this.directionScroll[0] < this.directionScroll[1] && window.pageYOffset > 200) {
        document.querySelector('.header').classList.add('header--hidden')
        this.directionScroll = []
      } else if (this.directionScroll[0] >= this.directionScroll[1]) {
        document.querySelector('.header').classList.remove('header--hidden')
        this.directionScroll = []
      }
    },
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
