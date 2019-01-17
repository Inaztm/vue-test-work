<template>
  <div class="posts">
    <article class="post" v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <strong>{{ post.text }}</strong>
    </article>

    <div class="total-posts">Всего записей: {{ totalPosts }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'news',
  computed: {
    ...mapGetters({
      posts: 'News/posts'
    }),
    totalPosts () {
      return this.posts && this.posts.length
    }
  },
  methods: {
    ...mapActions({
      fetchPosts: 'News/fetchPosts'
    })
  },
  mounted () {
    this.fetchPosts()
  }
}
</script>

<style scoped>
.post {
  padding: 35px;
  border-bottom: 1px solid #f1f3f5;
}
.total-posts {
  padding: 35px;
}
</style>

