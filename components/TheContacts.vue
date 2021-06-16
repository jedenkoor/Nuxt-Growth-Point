<template>
  <section class="contacts margin-section" id="contacts">
    <div class="container">
      <h2 class="h2title">Контакты</h2>
      <div class="contacts__content">
        <div class="contacts__map">
          <script
            charset="utf-8"
            async
            src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2b36efbf5996933252135d523bc76df98e707a68146e5b2ceac39387764e9c39&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=false"
          ></script>
        </div>
        <div class="contacts__info">
          <h3 class="contacts__title">Адрес</h3>
          <p class="contacts__text" v-html="headerData.contacts.address"></p>
          <h3 class="contacts__title">Время работы</h3>
          <p class="contacts__text" v-html="headerData.contacts.work_time"></p>
          <h3 class="contacts__title">Связаться с нами</h3>
          <a class="contacts__text" :href="`mailto:${headerData.contacts.email}`">{{ headerData.contacts.email }}</a>
          <a
            class="contacts__social"
            target="_blank"
            :href="headerData.contacts.socials[1].url"
            v-html="headerData.contacts.socials[0].icon"
          ></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('commonHeader', ['headerData'])
  }
}
</script>
