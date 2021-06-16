export const state = () => ({
  breadcrumbs: null
})

export const mutations = {
  updateBreadcrumbs(state, breadcrumbsData) {
    state.breadcrumbs = Object.freeze(breadcrumbsData)
  }
}
