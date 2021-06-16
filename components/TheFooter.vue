<template>
  <footer class="footer">
    <div class="container footer__container">
      <nuxt-link class="footer__logo" to="/" v-html="footerData.footer.logo" />
      <nav class="footer__menu">
        <ul class="footer__list footer-list">
          <li v-for="(menuItem, index) in footerData.footer.menu" :key="index" class="footer-list__item">
            <a class="footer-list__link" :href="menuItem.url" @click.prevent="scrollToHeader">
              {{ menuItem.title }}
            </a>
          </li>
          <li class="footer-list__item">
            <button
              class="footer-list__link popup-btn"
              @click.prevent="updatePopup([$event.target, 'BasePopupPrivacy'])"
            >
              Политика конфиденциальности
            </button>
          </li>
        </ul>
      </nav>
      <p class="footer__copy">
        © Growth Point, 2021
        <span>| Все права защищены</span>
      </p>
    </div>
  </footer>
</template>

<script>
import VueScrollTo from 'vue-scrollto'

import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState('commonFooter', ['footerData'])
  },
  methods: {
    ...mapMutations('commonPopup', ['updatePopup']),
    scrollToHeader(e) {
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
        document.querySelector('.header').classList.remove('header--hidden')
      }
    }
  }
}
</script>
