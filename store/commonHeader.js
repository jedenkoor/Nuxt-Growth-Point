import api from '@/api/api.js'

export const state = () => ({
  headerData: null,
  openMenu: false
})

export const mutations = {
  updateHeader(state, headerData) {
    state.headerData = Object.freeze(headerData)
  },
  toggleMenu(state) {
    state.openMenu = !state.openMenu
  },
  closeMenu(state) {
    state.openMenu = false
  }
}

export const actions = {
  async loadHeader(context) {
    try {
      const headerData = await api.fetchApi('api/?part=header')
      context.commit('updateHeader', headerData)
    } catch (e) {
      console.log(e)
    }
  }
}
