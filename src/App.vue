<template>
  <div id="app">
    <header class="header">
      <nav class="navbar">
        <section>
          <router-link class="navbar-item" :to="{ name: 'index' }">Главная</router-link>
          <router-link class="navbar-item" :to="{ name: 'news' }">Новости</router-link>
        </section>
        <section>
          <template v-if="!authId">
            <router-link class="navbar-item" :to="{ name: 'login' }">Войти</router-link>
          </template>
          <template v-else>
            <router-link class="navbar-item" :to="{ name: 'profile', params: {id: authId}}">Профиль</router-link>
            <a href="#logout" class="navbar-item" @click="goToLogout">Выйти</a>
          </template>
        </section>
      </nav>
    </header>
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapGetters({
      authId: 'Auth/id'
    })
  },
  methods: {
    ...mapActions({
      logout: 'Auth/logout'
    }),
    goToLogout () {
      this.logout()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 35px;
}

.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  padding-left: 10px;
  opacity: 0;
}

.header {
  padding-bottom: 15px;
  margin-bottom: 35px;
  border-bottom: 1px solid #f1f3f7;
}
.navbar {
  display: flex;
  justify-content: space-between;
}
.navbar-item {
  margin-left: 35px;
}
.navbar-item:first-child {
  margin-left: 0;
}
</style>
