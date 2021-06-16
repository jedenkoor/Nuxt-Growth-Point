<template>
  <div class="wrapper">
    <TheHeader />
    <TheMobMenu />
    <Nuxt />
    <BasePopupBlock />
    <TheFooter />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '',
      link: [...this.fonts]
    }
  },
  computed: {
    fonts() {
      return [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap' }
      ]
    }
  }
}
</script>
