<template>
  <div class="breadcrumbs">
    <ul
      class="container breadcrumbs__container"
      itemprop="http://schema.org/breadcrumb"
      itemscope=""
      itemtype="http://schema.org/BreadcrumbList"
    >
      <slot v-for="(bread, index) in breadcrumbs">
        <li
          class="breadcrumbs__item"
          itemprop="itemListElement"
          itemscope=""
          itemtype="http://schema.org/ListItem"
          :key="index"
          v-if="bread.url"
        >
          <nuxt-link :to="bread.url" :title="bread.name" class="breadcrumbs__link" itemprop="item">
            <span itemprop="name">{{ bread.name }}</span>
          </nuxt-link>
          <meta itemprop="position" :content="index + 1" />
        </li>
        <li class="breadcrumbs__item" :key="index" v-else>
          <div class="breadcrumbs__link">{{ bread.name }}</div>
        </li>
      </slot>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('commonBreadcrumbs', ['breadcrumbs'])
  }
}
</script>
