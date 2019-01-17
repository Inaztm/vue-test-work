import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/views/index/Index.vue'
import LoginPage from '@/views/login/Login.vue'
import NewsPage from '@/views/news/News.vue'
import ProfilePage from '@/views/profile/Profile.vue'
import guestOnly from '@/middleware/guestOnly'
import authOnly from '@/middleware/authOnly'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'index', component: IndexPage },
    { path: '/profile', name: 'profile', component: ProfilePage, beforeEnter: authOnly },
    { path: '/login', name: 'login', component: LoginPage, beforeEnter: guestOnly },
    { path: '/news', name: 'news', component: NewsPage },
    { path: '*', redirect: { name: 'index' } }
  ]
})
