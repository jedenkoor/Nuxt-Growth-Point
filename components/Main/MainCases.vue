<template>
  <section class="cases margin-section">
    <div class="container">
      <h2 class="banner__title visually-hidden">Наши работы</h2>
      <CasesList :cases="pageData.items" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    pageData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>
