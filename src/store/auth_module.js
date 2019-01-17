import { AuthService } from '../resource'

const authModule = {
  namespaced: true,
  state: {
    id: localStorage.getItem('auth_id') | null,
    user: null,
    error: false,
    isBusy: false
  },
  mutations: {
    SET_ID (state, id) {
      state.id = id
    },
    SET_ERROR (state, error) {
      state.error = error
    },
    SET_BUSY (state, busy) {
      state.isBusy = busy
    },
    LOG_OUT (state) {
      localStorage.removeItem('auth_id')
      state.id = null
    },
    SET_USER (state, user) {
      state.user = user
    }
  },
  actions: {
    async login ({ commit, state }, authData) {
      commit('SET_BUSY', true)
      const result = await AuthService.login(authData)

      if (result.data.status === 'ok') {
        localStorage.setItem('auth_id', result.data.data.id)
        commit('SET_ID', result.data.data.id)
        commit('SET_ERROR', false)
      } else {
        commit('SET_ERROR', true)
      }

      commit('SET_BUSY', false)
    },
    logout ({ commit, state }) {
      if (state.id) {
        commit('LOG_OUT')
      }
    },
    async fetchUser ({ commit, state }, id) {
      const result = await AuthService.getUser(id)

      if (result.data.status === 'ok') {
        commit('SET_USER', result.data.data)
        commit('SET_ERROR', false)
      } else {
        commit('SET_ERROR', true)
      }
    }
  },
  getters: {
    id (state) {
      return state.id
    },
    isBusy (state) {
      return state.isBusy
    },
    error (state) {
      return state.error
    },
    user (state) {
      return state.user
    }
  }
}

export default authModule
