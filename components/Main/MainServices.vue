<template>
  <section class="services margin-section" id="services">
    <div class="container">
      <h2 class="h2title">Что мы предлагаем?</h2>
      <ul class="services__list">
        <li
          class="services__item services-item"
          :data-service="service.name"
          v-for="(service, index) in services"
          :key="index"
          @click="openService($event, service.name)"
        >
          <h3 class="services-item__title">{{ service.name }}</h3>
          <p class="services-item__text">{{ service.text }}</p>
          <button class="services-item__btn btn-tertiary">Оформить заявку</button>
        </li>
        <li
          class="services__item services__item--active services-item"
          :data-service="lastService.name"
          @click="openService($event, lastService.name)"
        >
          <h3 class="services-item__title">{{ lastService.name }}</h3>
          <p class="services-item__text">{{ lastService.text }}</p>
          <button class="services-item__btn btn-tertiary">
            <svg
              class="services-item__btn--border"
              preserveAspectRatio="none"
              width="231"
              height="49"
              viewBox="0 0 231 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M207.5 1H24.5C11.5213 1 1 11.5213 1 24.5C1 37.4787 11.5213 48 24.5 48H207.5C217.097 48 225.351 42.247 229 34.0014H230.089C226.379 42.8135 217.662 49 207.5 49H24.5C10.969 49 0 38.031 0 24.5C0 10.969 10.969 0 24.5 0H207.5C217.662 0 226.379 6.1865 230.089 14.9986H229C225.351 6.75304 217.097 1 207.5 1Z"
                fill="#F4F4F4"
              />
            </svg>
            <svg
              class="services-item__btn--arr"
              width="36"
              height="17"
              viewBox="0 0 36 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M27.5801 0L36 8.5L27.5801 17L26.2126 15.6194L32.2979 9.47621L0 9.47621V7.52378L32.2979 7.52379L26.2126 1.38058L27.5801 0Z"
                fill="#F4F4F4"
              />
            </svg>
            Оформить заявку
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    pageData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    services() {
      return this.pageData.services.filter((item, index, arr) => item !== arr[arr.length - 1])
    },
    lastService() {
      return this.pageData.services.find((item, index, arr) => item === arr[arr.length - 1])
    }
  },
  methods: {
    ...mapMutations('commonPopup', ['updateSelectService', 'updatePopup']),
    openService(e, service) {
      this.updateSelectService(service)
      this.updatePopup([e.target, 'BasePopupCallback'])
    }
  }
}
</script>
