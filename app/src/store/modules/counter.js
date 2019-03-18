const state = {
  count: 0,
}

export const getters = {
  countIsOdd(state) {
    return !(state.count % 2)
  }
}

export const actions = {
  increment ({ commit }) {
    commit('increase')
  },
  incrementDelay ({ commit }) {
    setTimeout(() => {
      commit('increase')
    }, 500)
  },
  incrementDelayWrong ({ commit }) {
    commit('increaseDelay')
  }
}

export const mutations = {
  increase (state) {
    state.count++
  },
  increaseDelay (state) {
    setTimeout(() => {
      state.count++
    }, 500)
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
