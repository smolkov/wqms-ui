export const state = () => ({
  list: [
    {
      id: 1,
      state: 0,
      speed: 180,
    },
  ]
})

// getters
export const getters = {
  get_pumps(state) {
    return state.list
  },
}

// actions
export const actions = {}

// mutations
export const mutations = {}
