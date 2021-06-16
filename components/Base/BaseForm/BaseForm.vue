<template>
  <form class="callback__form callback-form" action="#" @submit.prevent.stop="sendForm" ref="form">
    <template v-for="(field, key) in fields">
      <component
        v-if="validObj"
        :key="key"
        :is="`BaseForm${field.template}`"
        :field="field"
        :valid="validObj.fields[key]"
        v-model="field.value"
        @changeCheck="changeCheck"
        @addFile="addFile"
        @deleteFile="deleteFile"
      ></component>
    </template>
    <p class="callback-form__privacy">
      Нажав кнопку, соглашаюсь с
      <button class="popup-btn" @click.prevent="updatePopup([$event.target, 'BasePopupPrivacy'])">
        политикой конфиденциальности
      </button>
    </p>
    <button class="btn-primary callback-form__send" type="submit">Оформить заявку</button>
  </form>
</template>

<script>
import VueScrollTo from 'vue-scrollto'

import { required, minLength, maxLength, email, alpha } from 'vuelidate/lib/validators'

import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {
      fields: {
        name: {
          template: 'Input',
          type: 'text',
          placeholder: 'Имя',
          value: '',
          vuelidate: {
            required,
            alpha
          }
        },
        phone: {
          template: 'Input',
          type: 'tel',
          placeholder: 'Телефон',
          value: '',
          mask: true,
          vuelidate: {
            required,
            minLength: minLength(18),
            maxLength: maxLength(18)
          }
        },
        email: {
          template: 'Input',
          type: 'text',
          placeholder: 'E-mail',
          value: '',
          vuelidate: {
            email
          }
        },
        titleServices: {
          template: 'Title',
          text: 'Желаемая услуга'
        },
        services: {
          template: 'Checkbox',
          list: []
        },
        titleTask: {
          template: 'Title',
          text: 'О проекте'
        },
        task: {
          template: 'Textarea',
          placeholder: 'Задача',
          value: ''
        },
        files: {
          template: 'File',
          list: []
        }
      }
    }
  },
  validations() {
    const obj = {
      fields: {}
    }
    for (const key in this.fields) {
      if (this.fields[key].vuelidate) {
        obj.fields[key] = {
          value: this.fields[key].vuelidate
        }
      }
    }
    return obj
  },
  computed: {
    ...mapState('commonHeader', ['headerData']),
    ...mapState('commonPopup', ['selectService']),
    validObj() {
      return this.$v ? this.$v : false
    }
  },
  mounted() {
    if (this.headerData) {
      this.fields.services.list = this.headerData.services.map(item => {
        return {
          name: item.name,
          selected: this.selectService === item.name,
          complex: item.type === 'complex'
        }
      })
    }
    this.updateSelectService('')
  },
  methods: {
    ...mapMutations('commonPopup', ['updatePopup', 'updateSelectService']),
    ...mapActions('commonForm', ['sendData']),
    changeCheck(key, value) {
      if (this.fields.services.list[key].complex) {
        this.fields.services.list.forEach(item => {
          item.selected = false
        })
      } else {
        this.fields.services.list
          .filter(item => item.complex)
          .forEach(item => {
            item.selected = false
          })
      }
      this.fields.services.list[key].selected = value
    },
    addFile(file) {
      this.fields.files.list.push(file)
    },
    deleteFile(file) {
      this.fields.files.list.forEach((item, index) => {
        if (item === file) {
          this.fields.files.list.splice(index, 1)
        }
      })
    },
    getFormData() {
      const formData = new FormData()
      formData.append('FIELDS[TITLE]', this.fields.name.value)
      formData.append('FIELDS[PHONE]', this.fields.phone.value)
      formData.append('FIELDS[EMAIL]', this.fields.email.value)
      formData.append('FIELDS[MESSAGE]', this.fields.task.value)
      for (const service of this.fields.services.list) {
        if (service.selected) {
          formData.append('FIELDS[SERVICES][]', service.name)
        }
      }
      for (const file of this.fields.files.list) {
        formData.append('DOCS[]', file)
      }
      return formData
    },
    clearForm() {
      this.fields.name.value = ''
      this.fields.phone.value = ''
      this.fields.email.value = ''
      this.fields.task.value = ''
      for (const service of this.fields.services.list) {
        service.selected = false
      }
      this.fields.files.list = []
      this.$v.fields.$reset()
    },
    sendForm() {
      this.$v.fields.$touch()
      setTimeout(() => {
        if (this.$v.$invalid) {
          if (!this.$refs.form.closest('.popup')) {
            const options = {
              offset: document.documentElement.clientWidth < 1024 ? 0 : -100
            }
            VueScrollTo.scrollTo(this.$refs.form.querySelector('.input-err'), options)
          }
        } else {
          const formData = this.getFormData()
          this.sendData({ formData, button: this.$refs.form.querySelector('[type="submit"]') })
          this.clearForm()
        }
      }, 0)
    }
  }
}
</script>
