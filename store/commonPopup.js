export const state = () => ({
  popupType: '',
  selectService: ''
})

export const mutations = {
  updateSelectService(state, service) {
    state.selectService = service
  },
  updatePopup(state, obj) {
    const [target, type] = obj
    if (target) {
      target.classList.add('popup-trigger')
    }
    state.popupType = type
  },
  closePopup() {
    const popupTrigger = document.querySelector('.popup-trigger')
    popupTrigger.focus()
    popupTrigger.classList.remove('popup-trigger')
    this.commit('commonPopup/updatePopup', [], { root: true })
  }
}
