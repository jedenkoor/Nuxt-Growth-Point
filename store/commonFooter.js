import api from '@/api/api.js'

export const state = () => ({
  footerData: null
})

export const mutations = {
  updateFooter(state, footerData) {
    state.footerData = Object.freeze(footerData)
  }
}

export const actions = {
  async loadFooter(context) {
    try {
      const footerData = await api.fetchApi('api/?part=footer')
      context.commit('updateFooter', footerData)
    } catch (e) {
      console.log(e)
    }
  }
}
