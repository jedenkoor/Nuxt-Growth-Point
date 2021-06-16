<template>
  <div class="popup__content">
    <h2 class="popup__title">Политика конфиденциальности</h2>
    <div class="popup__text" v-html="footerData.footer.privacy_text"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('commonFooter', ['footerData'])
  }
}
</script>
