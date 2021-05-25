export const state = () => ({
  counter: 0,
  visits: [],
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  add_visit(state, path) {
    state.visits.push({
      path,
      date: new Date().toJSON(),
    })
  },
}
