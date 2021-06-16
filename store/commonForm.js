import api from '@/api/api.js'

export const actions = {
  async sendData(context, { formData, button }) {
    try {
      const response = await api.fetchApi('api/?page=/main/submit/', 'POST', formData, {})
      const type = response.success ? 'BasePopupSuccess' : 'BasePopupError'
      context.commit('commonPopup/updatePopup', [button, type], { root: true })
      setTimeout(() => {
        if (context.rootState.commonPopup.popupType) {
          context.commit('commonPopup/closePopup', [], { root: true })
        }
      }, 2000)
    } catch (e) {
      console.log(e)
    }
  }
}
