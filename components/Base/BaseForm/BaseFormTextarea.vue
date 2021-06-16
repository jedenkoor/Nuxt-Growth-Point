<template>
  <textarea
    class="callback-form__textarea"
    :class="{ 'input-border': dataValue }"
    :placeholder="field.placeholder"
    v-model="dataValue"
  ></textarea>
</template>

<script>
export default {
  props: {
    field: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    dataValue: {
      get() {
        return this.field.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>
