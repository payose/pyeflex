import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Filter from '../view/Filter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "pyeflex Movies | Home"
    }
  },
  {
    path: '/filter/:tabName',
    name: 'Filter',
    meta: {
      title: "pyeflex Movies | Filter"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Filter.vue')
  }
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   document.title = `${to.meta.title}`
//   next()
// })

export default router
