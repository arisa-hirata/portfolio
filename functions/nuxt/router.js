import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _f46b378e = () => interopDefault(import('../pages/BabyAnimalFarm/index.vue' /* webpackChunkName: "pages/BabyAnimalFarm/index" */))
const _26f9f3ba = () => interopDefault(import('../pages/Ecard/index.vue' /* webpackChunkName: "pages/Ecard/index" */))
const _76c6f102 = () => interopDefault(import('../pages/Infographic/index.vue' /* webpackChunkName: "pages/Infographic/index" */))
const _0c651254 = () => interopDefault(import('../pages/NiceCreamFactory/index.vue' /* webpackChunkName: "pages/NiceCreamFactory/index" */))
const _00deb0d4 = () => interopDefault(import('../pages/Pollways/index.vue' /* webpackChunkName: "pages/Pollways/index" */))
const _022373f4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/BabyAnimalFarm",
      component: _f46b378e,
      name: "BabyAnimalFarm"
    }, {
      path: "/Ecard",
      component: _26f9f3ba,
      name: "Ecard"
    }, {
      path: "/Infographic",
      component: _76c6f102,
      name: "Infographic"
    }, {
      path: "/NiceCreamFactory",
      component: _0c651254,
      name: "NiceCreamFactory"
    }, {
      path: "/Pollways",
      component: _00deb0d4,
      name: "Pollways"
    }, {
      path: "/",
      component: _022373f4,
      name: "index"
    }],

    fallback: false
  })
}
