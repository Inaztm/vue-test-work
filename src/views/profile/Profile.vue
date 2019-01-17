<template>
  <div v-if="user">
    <h2>Город: {{ user.city }}</h2>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'profile',
  computed: {
    ...mapGetters({
      user: 'Auth/user',
      id: 'Auth/id'
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
