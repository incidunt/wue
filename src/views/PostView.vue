<template>
  <div class="post-page">
    <Post :slug="this.slug" :isSingle="true" />
  </div>
</template>

<script>
import Post from "../components/Post"


export default {
  components: {
    Post
  },
  data: () => ({
    slug: ""
  }),
  mounted () {
    this.slug = this.$route.params.slug
  }
}
</script>
