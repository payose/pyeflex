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
    component: () => import(/* webpackChunkName: "about" */ '../views/Filter.vue')
  },
  {
    path: '/movie',
    name: 'Movie',
    // component: Movie,
    meta: {
      title: "pyeflex Movies | movie"
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// router.beforeEach((to, from, next) => {
//   document.title = `${to.meta.title}`
//   next()
// })

export default router
