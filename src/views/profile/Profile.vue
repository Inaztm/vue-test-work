<template>
  <div v-if="user">
    <h2>Город: {{ user.city }}</h2>
    <h2>Знание языков:</h2>
    <ul>
      <li v-for="language in user.languages" :key="language">
        {{ language }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'profile',
  computed: {
    ...mapGetters({
      user: 'Auth/user',
      id: 'Auth/id',
      error: 'Auth/error'
    })
  },
  methods: {
    ...mapActions({
      fetchUser: 'Auth/fetchUser'
    })
  },
  mounted () {
    this.fetchUser(this.id)
  }
}
</script>
