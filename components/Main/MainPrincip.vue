<template>
  <section class="principles margin-section">
    <div class="container">
      <h2 class="h2title">{{ pageData.work_princip.title }}</h2>
      <ul class="principles__list">
        <li
          class="principles__item principles-item"
          v-for="(princip, index) in pageData.work_princip.items"
          :key="index"
        >
          <h3 class="principles-item__title">{{ princip.title }}</h3>
          <p class="principles-item__text">{{ princip.text }}</p>
        </li>
      </ul>
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
