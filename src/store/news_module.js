import { PostService } from '../resource'

const newsModule = {
  namespaced: true,
  state: {
    posts: []
  },
  mutations: {
    SET_POSTS (state, posts) {
      state.posts = posts
    }
  },
  actions: {
    async fetchPosts ({ commit, state }) {
      const result = await PostService.getPosts()

      if (result.data.status === 'ok') {
        commit('SET_POSTS', result.data.data)
      }
    }
  },
  getters: {
    posts (state) {
      return state.posts
    }
  }
}

export default newsModule
