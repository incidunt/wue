<template>
  <nav class="navbar">
    <ul>
      <li>
        <router-link to="/">
          Home
        </router-link>
      </li>
      <li v-if="isAboutPage">
        <router-link to="/about">
          About Us
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data: () => ({
    isAboutPage: false
  }),
  created () {
    wpapi.pages().slug("about-us")
      .then((pages) => {
        if (pages.length) {
          this.isAboutPage = true
        }
      })
  }
}
</script>

<style scoped>
.navbar {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  background-color: #FFF;
  border-bottom: 1px solid #CCC;
}
.navbar ul {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.navbar ul li {
  width: 100%;
  list-style: none;
  border-right: 1px solid #EEE;
}
.navbar ul li:last-child {
  border-right: none;
}
.navbar ul li a,
.navbar ul li a:active {
  color: #000;
  font-family: fantasy;
  display: block;
  text-align: center;
  text-decoration: none;
  padding: 20px 10px;
}
.navbar ul li a:hover,
.navbar ul li a.router-link-exact-active {
  background-color: #EEE;
}
</style>
