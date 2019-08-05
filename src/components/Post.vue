<template>
  <article class="post">
    <template v-if="!loaded">
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
      <h2 class="post-title">
        <router-link v-if="!isSingle" :to="{ name: 'post', params: { slug: this.post.slug } }">
          {{ post.title.rendered }}
        </router-link>
        <span v-else>
          {{ post.title.rendered }}
        </span>
      </h2>
      <div class="post-contents">
        <div v-if="isSingle" v-html="post.content.rendered"></div>
        <div v-else v-html="post.excerpt.rendered"></div>
      </div>
    </template>
  </article>
</template>

<script>
import Skeleton from "vue-content-loading"


export default {
  components: {
    Skeleton
  },
  props: ["id", "slug", "data", "isSingle", "isPage"],
  data: () => ({
    post: {},
    error: "",
    loaded: false
  }),
  created () {
    if (typeof this.data === "object") {
      this.post = this.data
      this.loaded = true
    } else {
      let req = wpapi.posts()
      if (this.isPage) req = wpapi.pages()
      if (this.id) req.id(this.id)
      if (this.slug) req.slug(this.slug)
      req.then((posts) => {
        if (posts.length > 0) {
          posts.map((post) => {
            if (post.slug.indexOf(this.slug) === 0) {
              this.post = post
              this.loaded = true
            }
          })
          if (!this.post) {
            this.error = "Post not founded."
            this.loaded = true
          }
        }
      }).catch((error) => {
        this.error = error
        this.loaded = true
      })
    }
  }
}
</script>

<style scoped>
.post {
  display: block;
  font-family: sans-serif;
}
h2.post-title {
  display: block;
  width: 100%;
  color: #000;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #EEE;
}
h2.post-title a {
  color: #368ecc;
  text-decoration: none;
}
.post-contents {
  word-break: break-word;
}
</style>

<style>
.post-contents img {
  width: 100%;
  display: block;
}
.post-contents ul,
.post-contents ol {
  margin-left: 20px;
}
</style>
