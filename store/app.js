export const state = () => ({
  mode: 'light',
  themeColor: '#2196f3',
  theme: 'blue',
  locale: 'de',
  name: 'WQMS-test',
})

// getters
export const getters = {
  version: (state, getters) => {
    return '0.0.1'
  },
  versions: (state, getters) => {
    let versions = [
      { title: '0.0.1' },
      { title: '0.0.1-alpha' },
      { title: 'develop' },
    ]
    return versions
  },
  translations: (state, getters) => {
    let trans = [
      {
        locale: 'de',
        title: "German",
      },
      {
        locale: 'en',
        title: "English",
      },
    ]
    return trans
  },
}

// actions
export const actions = {
  async change_locale ({ commit },locale) {
    commit('set_locale', locale)
    console.info('change locale ' + locale)
  }
}

// mutations
export const mutations = {
  set_locale (state, { locale }) {
    state.locale = locale
  },
}
