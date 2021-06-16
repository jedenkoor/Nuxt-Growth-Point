import api from '@/api/api.js'
import serialize from '@/functions/serializeQueryParams.js'

export const state = () => ({
  pageData: null,
  items: null
})

export const getters = () => ({})

export const mutations = {
  updatePage(state, pageData) {
    state.pageData = Object.freeze(pageData)
  },
  updateItems(state, itemsData) {
    state.items = Object.freeze(itemsData)
  }
}

export const actions = {
  async loadPage(context, url) {
    try {
      const pageData = await api.fetchApi(`api/?page=${url}`)
      context.commit('updatePage', pageData)
      context.commit('updateItems', pageData.items)
      context.commit('commonBreadcrumbs/updateBreadcrumbs', pageData.breadcrumbs, { root: true })
    } catch (e) {
      console.log(e)
    }
  },
  async filter(context, { url, filter = {} }) {
    let params = {
      ...filter
    }
    params = serialize.serializeQueryParams(params)
    try {
      const pageData = await api.fetchApi(`api/?page=${url}`, 'POST', params)
      context.commit('updateItems', pageData.items)
    } catch (e) {
      console.log(e)
    }
  }
}
