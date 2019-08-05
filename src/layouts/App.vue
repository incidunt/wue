<template>
  <div id="app">
    <div class="container">
      <Navbar />
      <router-view class="page" />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
.container {
  width: 700px;
  min-height: 200px;
  background-color: #FFF;
  margin: 6% auto;
  border-radius: 8px;
  box-shadow: 4px 4px 5px #EEE;
}
.page {
  margin-left: 20px;
  margin-right: 20px;
}
</style>

<style>
* {
  border: none;
  padding: 0;
  margin: 0;
}
body {
  background-color: #f7f7f7;
}
.page {
  padding-top: 20px;
  padding-bottom: 20px;
}
.message {
  text-align: center;
  padding: 20px;
}
.message.error {
  background-color: brown;
  color: #FFF;
}
</style>
