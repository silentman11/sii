import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _724c3d7d = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages\\index" */).then(m => m.default || m)
const _529462b8 = () => import('..\\pages\\about.vue' /* webpackChunkName: "pages\\about" */).then(m => m.default || m)
const _eace3c72 = () => import('..\\pages\\advanced.vue' /* webpackChunkName: "pages\\advanced" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _724c3d7d,
			name: "index"
		},
		{
			path: "/about",
			component: _529462b8,
			name: "about"
		},
		{
			path: "/advanced",
			component: _eace3c72,
			name: "advanced"
		}
    ],
    fallback: false
  })
}
