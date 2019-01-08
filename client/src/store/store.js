import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  mutations: {
    SETTOKEN (state, token) {
      if (token) {
        state.token = token
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    SETUSER (state, user) {
      state.user = user
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('SETTOKEN', token)
    },
    setUser ({commit}, user) {
      commit('SETUSER', user)
    }
  }
})
