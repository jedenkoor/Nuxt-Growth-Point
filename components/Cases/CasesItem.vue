<template>
  <li class="cases__item cases-item">
    <nuxt-link class="cases-item__link" :to="caseItem.DETAIL_PAGE_URL">
      <picture>
        <source type="image/webp" :srcset="caseItem.PREVIEW_PICTURE.WEBP_SRC" />
        <img class="cases-item__img" :src="caseItem.PREVIEW_PICTURE.RESIZE_SRC" :alt="caseItem.NAME" />
      </picture>
      <div class="cases-item__content">
        <span class="cases-item__span">{{ caseItem.PROPERTY_TYPE_VALUE }}</span>
        <span class="cases-item__span">{{ caseItem.PROPERTY_YEAR_VALUE }}</span>
        <h4 class="cases-item__title">{{ caseItem.NAME }}</h4>
      </div>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    caseItem: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
