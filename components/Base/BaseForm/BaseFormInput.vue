<template>
  <input
    class="callback-form__input"
    :class="{ 'input-err': valid.$error, 'input-border': !valid.$invalid && dataValue }"
    :type="field.type"
    :placeholder="field.placeholder"
    v-model="dataValue"
    v-mask="field.mask ? mask : ''"
  />
</template>

<script>
export default {
  props: {
    field: {
      type: Object,
      default: () => {}
    },
    valid: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      mask: '+7 (###) ###-##-##'
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
