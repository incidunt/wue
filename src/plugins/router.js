import Vue from "vue"
import VueRouter from "vue-router"
import NProgress from "nprogress"
import routes from "../routes"
import "nprogress/nprogress.css"


Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  base: wue.basePath,
  routes
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }

  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router