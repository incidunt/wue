

export default [
  {
    name: "home",
    path: "/",
    component: () => import("./views/HomeView")
  },
  {
    name: "about",
    path: "/about",
    component: () => import("./views/AboutView")
  },
  {
    name: "post",
    path: "/posts/:slug",
    component: () => import("./views/PostView")
  }
]