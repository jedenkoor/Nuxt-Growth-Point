<template>
  <main class="content">
    <section class="notfound">
      <div class="container notfound__container">
        <h1 class="notfound__title">404</h1>
        <div class="notfound__text">
          <p>Веденный Вами адрес недоступен. Этому может быть несколько объяснений:</p>
          <p>
            Страница удалена или перенесена в другое место
            <br />
            Вы перешли по ссылке, в которой была допущена ошибка
          </p>
        </div>
        <div class="notfound__btns">
          <nuxt-link class="notfound__btn btn-primary" to="/">Перейти на главную</nuxt-link>
          <nuxt-link class="notfound__btn btn-secondary" to="/portfolio/">Смотреть портфолио</nuxt-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'error',
  props: {
    error: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  head() {
    return {
      title: 'Ошибка 404: Страница не найдена',
      meta: [
        { name: 'title', content: 'Ошибка 404: Страница не найдена' },
        { name: 'description', content: '' },
        { property: 'og:title', content: 'Ошибка 404: Страница не найдена' },
        { property: 'og:description', content: '' },
        { property: 'og:url', content: `${this.headerData.current_domen}/` },
        { property: 'og:image', content: `${this.headerData.current_domen}/images/og-share-img.jpg` }
      ]
    }
  },
  computed: {
    ...mapState('commonHeader', ['headerData'])
  }
}
</script>
