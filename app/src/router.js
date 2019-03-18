import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import cart from './views/cart'
import detail from './views/detail'
import counter from './views/counter'
import NotFound from './views/404'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/cart' },
    { path: '/cart', name: 'cart', component: cart },
    { path: '/products/:id', name: 'detail', component: detail },
    { path: '/counter', name: 'detail', component: counter },
    { path: '*', name: 'NotFound', component: NotFound },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    }
  ]
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {

  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router
