<template>
  <section class="about margin-section" id="about">
    <div class="container about__container">
      <div class="about__col">
        <h2 class="h2title">{{ pageData.about.title }}</h2>
        <div v-html="pageData.about.text"></div>
      </div>
      <div class="about__col"><div class="about__img"></div></div>
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
