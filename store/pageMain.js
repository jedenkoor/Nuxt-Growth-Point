import api from '@/api/api.js'

export const state = () => ({
  pageData: null
})

export const getters = () => ({})

export const mutations = {
  updatePage(state, pageData) {
    state.pageData = Object.freeze(pageData)
  }
}

export const actions = {
  async loadPage(context, url) {
    try {
      const pageData = await api.fetchApi(`api/?page=${url}`)
      context.commit('updatePage', pageData)
    } catch (e) {
      console.log(e)
    }
  }
}
