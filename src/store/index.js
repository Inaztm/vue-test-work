import Vue from 'vue'
import Vuex from 'vuex'
import AuthModule from './auth_module'
import newsModule from './news_module'

Vue.use(Vuex)

const modules = {
  Auth: AuthModule,
  News: newsModule
}

export default new Vuex.Store({
  modules
})
