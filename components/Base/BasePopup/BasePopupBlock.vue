<template>
  <div>
    <div class="overlay" :class="{ 'overlay--active': popupType }" @click="closePopup"></div>
    <div class="popup" :class="{ 'popup--active': popupType }">
      <button class="popup__close" @click.prevent="closePopup" ref="closeBtn">
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.3637 5.63623L11.9997 12.0002M11.9997 12.0002L5.63574 18.3642M11.9997 12.0002L18.3637 18.3642M11.9997 12.0002L5.63574 5.63623"
          />
        </svg>
      </button>
      <component :is="popupType"></component>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  head() {
    return {
      htmlAttrs: {
        class: [
          this.popupType ? 'fixed' : '',
          this.getScrollbarWidth && this.popupType ? 'compensate-for-scrollbar' : ''
        ]
      }
    }
  },
  computed: {
    ...mapState('commonPopup', ['popupType']),
    getScrollbarWidth() {
      return process.browser ? window.innerWidth - document.documentElement.clientWidth : 0
    }
  },
  updated() {
    if (this.popupType) {
      setTimeout(() => {
        this.$refs.closeBtn.focus()
      }, 100)
    }
  },
  methods: {
    ...mapMutations('commonPopup', ['updatePopup', 'closePopup'])
  }
}
</script>
