<template>
  <ul class="cases__list">
    <CasesItem v-for="(caseItem, index) in cases" :key="index" :case-item="caseItem" />
    <li v-if="this.$route.path === '/'" class="cases__item cases__item--last cases-item">
      <nuxt-link class="cases-item__link" to="/portfolio/">
        <div class="cases-item__content">
          <h4 class="cases-item__title">Все кейсы</h4>
          <div class="cases-item__btn">Смотреть портфолио</div>
        </div>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    cases: {
      type: Array,
      default: () => []
    }
  }
}
</script>
