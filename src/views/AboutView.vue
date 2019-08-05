<template>
  <div class="about-page">
    <Post slug="about-us" :isPage="true" :isSingle="true" />
  </div>
</template>

<script>
import Post from "../components/Post"


export default {
  components: {
    Post
  }
}
</script>
