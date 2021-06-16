<template>
  <div class="callback-form__files callback-form-files">
    <label class="callback-form-files__download">
      <input class="visually-hidden" type="file" multiple="multiple" ref="file" @change="loadFile" />
      <span>
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.5 11.5L11.7426 17.2574C10.947 18.053 9.86786 18.5 8.74264 18.5C6.3995 18.5 4.5 16.6005 4.5 14.2574C4.5 13.1321 4.94699 12.053 5.74264 11.2574L11.6716 5.32843C12.202 4.79799 12.9214 4.5 13.6716 4.5C15.2337 4.5 16.5 5.76633 16.5 7.32843C16.5 8.07857 16.202 8.79799 15.6716 9.32843L9.91421 15.0858C9.649 15.351 9.28929 15.5 8.91421 15.5C8.13316 15.5 7.5 14.8668 7.5 14.0858C7.5 13.7107 7.649 13.351 7.91421 13.0858L13.5 7.5"
            stroke="#F4F4F4"
          />
        </svg>
        Прикрепить файл(ы)
      </span>
    </label>
    <div class="callback-form-files__items" v-if="field.list.length" v-click-outside="hideAll">
      <div class="callback-form-files__main callback-form-files-main">
        <button class="callback-form-files-main__del" @click.prevent="deleteFile(field.list[0])">
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L17 17M6 17L17 6" />
          </svg>
        </button>
        <span class="callback-form-files-main__title">{{ field.list[0].name }}</span>
        <button class="callback-form-files-main__more" v-if="field.list.length > 1" @click.prevent="showAll = !showAll">
          +{{ field.list.length - 1 }}
        </button>
      </div>
      <ul
        class="callback-form-files__list callback-form-files-list"
        :class="{ 'callback-form-files__list--active': showAll }"
        v-if="field.list.length > 1"
      >
        <li
          class="callback-form-files-list__item"
          v-for="(file, index) in field.list"
          :key="index"
          :style="index > 0 ? '' : 'display: none'"
        >
          <button class="callback-form-files-list__del" @click.prevent="deleteFile(file)">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6L17 17M6 17L17 6" />
            </svg>
          </button>
          <span class="callback-form-files-list__title">{{ file.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  directives: {
    ClickOutside
  },
  props: {
    field: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      showAll: false,
      requiredSize: 20 * 1024 * 1024,
      requiredExtension: ['doc', 'docx', 'xls', 'xlsx', 'txt', 'rtf', 'pdf', 'png', 'jpeg', 'jpg', 'gif']
    }
  },
  methods: {
    hideAll() {
      if (this.showAll) {
        this.showAll = !this.showAll
      }
    },
    loadFile(event) {
      this.addArrFile(event.target.files)
      this.$refs.file.value = ''
    },
    addArrFile(files) {
      let errorMessage = ''
      for (const file of files) {
        if (file.name === undefined) {
          continue
        }
        const out = this.addFile(file)
        if (out !== true) {
          errorMessage += `${out}<br>`
        }
      }
      if (errorMessage) {
        console.log(errorMessage)
      }
    },
    addFile(file) {
      const ext = file.name.split('.').pop()
      if (!this.requiredExtension.includes(ext)) {
        return `Недопустимый тип файла (${file.name})`
      }
      if (file.size > this.requiredSize) {
        return `Размер файла превышает допустимый (${file.name})`
      }
      if (file.lastModified !== undefined) {
        this.$emit('addFile', file)
        return true
      }
      return `Файл поврежден (${file.name})`
    },
    deleteFile(file) {
      this.$emit('deleteFile', file)
    }
  }
}
</script>
