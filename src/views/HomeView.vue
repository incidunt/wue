<template>
  <div class="home-page">
    <template v-if="!loaded">
      <Skeleton class="post">
        <circle cx="50" cy="50" r="50" />
        <rect x="120" y="20" rx="4" ry="4" width="70%" height="15" />
        <rect x="120" y="43" rx="4" ry="4" width="50%" height="10" />
        <rect x="120" y="60" rx="4" ry="4" width="40%" height="10" />
      </Skeleton>
      <Skeleton class="post">
        <circle cx="50" cy="50" r="50" />
        <rect x="120" y="20" rx="4" ry="4" width="70%" height="15" />
        <rect x="120" y="43" rx="4" ry="4" width="50%" height="10" />
        <rect x="120" y="60" rx="4" ry="4" width="40%" height="10" />
      </Skeleton>
      <Skeleton class="post">
        <circle cx="50" cy="50" r="50" />
        <rect x="120" y="20" rx="4" ry="4" width="70%" height="15" />
        <rect x="120" y="43" rx="4" ry="4" width="50%" height="10" />
        <rect x="120" y="60" rx="4" ry="4" width="40%" height="10" />
      </Skeleton>
    </template>
    <template v-else-if="error">
      <p class="message error">{{ error }}</p>
    </template>
    <template v-else>
      <Post v-for="post in posts" :key="post.id" :data="post" />
    </template>
  </div>
</template>

<script>
import Post from "../components/Post"
import Skeleton from "vue-content-loading"

export default {
  components: {
    Post,
    Skeleton
  },
  data: () => ({
    posts: {},
    error: "",
    loaded: false
  }),
  created () {
    wpapi.posts()
      .then((posts) => {
        this.posts = posts
        this.loaded = true
      })
      .catch((error) => {
        this.error = error
        this.loaded = true
      })
  }
}
</script>

<style scoped>
.post {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 4px solid #EEE;
}
.post:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}
</style>