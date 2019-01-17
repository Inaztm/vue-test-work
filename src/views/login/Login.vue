<template>
  <div class="form">
      <div class="error" v-if="error">Имя пользователя или пароль введены не верно</div>

      <label>Email</label>
      <input type="email" v-model="email" placeholder="Type email..." />

      <label>Пароль</label>
      <input type="password" v-model="password" />

      <div class="button-wrapper">
          <button
            class="button"
            @click="goToLogin"
            :disabled="isBusy">
            {{ loginButtonText }}
            </button>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      email: null,
      password: null
    }
  },
  computed: {
    ...mapGetters({
      authId: 'Auth/id',
      isBusy: 'Auth/isBusy',
      error: 'Auth/error'
    }),
    loginButtonText () {
      return this.isBusy ? 'Подождите пожалуйста...' : 'Войти'
    }
  },
  methods: {
    ...mapActions({
      login: 'Auth/login'
    }),
    goToLogin () {
      const data = {
        email: this.email,
        password: this.password
      }

      this.login(data)

      this.$router.push({name: 'profile'})
    }
  }
}
</script>

<style scoped>
.form {
  text-align: left;
}

label {
  display: block;
  margin-top: 15px;
  padding-bottom: 5px;
}

input {
  background: none;
  border: 1px solid #f1f3f5;
  padding: 3px;
  border-radius: 3px;
}

.button-wrapper {
  display: block;
  margin-top: 15px;
}

.button {
  cursor: pointer;
  background-color: darkgreen;
  color: #f1f3f5;
  padding: 5px 15px;
  border: 0;
  border-radius: 3px;
}

</style>
