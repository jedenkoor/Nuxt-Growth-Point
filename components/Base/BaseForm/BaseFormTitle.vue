<template>
  <h3 class="callback-info__subtitle">{{ field.text }}</h3>
</template>

<script>
export default {
  props: {
    field: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
