<template>
  <ul class="callback-form__list callback-form-list">
    <li class="callback-form-list__item" v-for="(item, index) in field.list" :key="index">
      <label class="callback-form-list__label">
        <input
          class="visually-hidden"
          type="checkbox"
          name="service"
          :value="item.name"
          :checked="item.selected"
          @change="changeCheck(index, $event.target.checked)"
        />
        <span>{{ item.name }}</span>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    field: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    changeCheck(key, value) {
      this.$emit('changeCheck', key, value)
    }
  }
}
</script>
