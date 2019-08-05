import Vue from "vue"
import App from "./layouts/App"
import router from "./plugins/router"


new Vue({
  el: "#app",
  router,
  render: (h) => h(App)
})