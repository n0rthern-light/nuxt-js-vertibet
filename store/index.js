export const state = () => ({
  user: null
})

export const mutations = {
  SET_USER: function (state, user) {
    state.user = user
  },
  LOGOUT: function (state) {
    state.user = null
  }
}

export const actions = {
  async loginState({ commit }) {
    const { data } = await this.$axios.get('api/userauth/loginstate')
    if (data.user) {
      commit('SET_USER', data.user)
      return data.user
    }
    return null
  },
  async login({ commit }, { email, password }) {
    const data = await this.$axios.$post('api/userauth/login', { email: email, password: password })
    if (data.user) {
      commit('SET_USER', data.user)
      return data.user
    }
    return null
  },
  logout({ commit }) {
    this.$axios.get('api/userauth/logout')
    commit('SET_USER', null)
  }
}
