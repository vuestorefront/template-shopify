import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _365e06f8 = () => interopDefault(import('../pages/Category.vue' /* webpackChunkName: "pages/Category" */))
const _74253340 = () => interopDefault(import('../pages/Checkout.vue' /* webpackChunkName: "" */))
const _462506e8 = () => interopDefault(import('../pages/Checkout/Billing.vue' /* webpackChunkName: "" */))
const _7b9cce97 = () => interopDefault(import('../pages/Checkout/Payment.vue' /* webpackChunkName: "" */))
const _007c4b6d = () => interopDefault(import('../pages/Checkout/Shipping.vue' /* webpackChunkName: "" */))
const _2bebd1d8 = () => interopDefault(import('../pages/Checkout/ThankYou.vue' /* webpackChunkName: "" */))
const _a8277f58 = () => interopDefault(import('../pages/ContactUs.vue' /* webpackChunkName: "pages/ContactUs" */))
const _3cd1e759 = () => interopDefault(import('../pages/Home.vue' /* webpackChunkName: "" */))
const _4b9b7ad7 = () => interopDefault(import('../pages/MyAccount.vue' /* webpackChunkName: "pages/MyAccount" */))
const _6bf693f2 = () => interopDefault(import('../pages/MyAccount/AdressBook.vue' /* webpackChunkName: "pages/MyAccount/AdressBook" */))
const _225a2262 = () => interopDefault(import('../pages/MyAccount/BillingDetails.vue' /* webpackChunkName: "pages/MyAccount/BillingDetails" */))
const _7a917d9e = () => interopDefault(import('../pages/MyAccount/LoyaltyCard.vue' /* webpackChunkName: "pages/MyAccount/LoyaltyCard" */))
const _337c0c0d = () => interopDefault(import('../pages/MyAccount/MyNewsletter.vue' /* webpackChunkName: "pages/MyAccount/MyNewsletter" */))
const _4c7ad005 = () => interopDefault(import('../pages/MyAccount/MyProfile.vue' /* webpackChunkName: "pages/MyAccount/MyProfile" */))
const _d8049d12 = () => interopDefault(import('../pages/MyAccount/MyReviews.vue' /* webpackChunkName: "pages/MyAccount/MyReviews" */))
const _0ec12d6e = () => interopDefault(import('../pages/MyAccount/OrderHistory.vue' /* webpackChunkName: "pages/MyAccount/OrderHistory" */))
const _c9335a48 = () => interopDefault(import('../pages/MyAccount/ShippingDetails.vue' /* webpackChunkName: "pages/MyAccount/ShippingDetails" */))
const _7eabd565 = () => interopDefault(import('../pages/Product.vue' /* webpackChunkName: "pages/Product" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Category",
    component: _365e06f8,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _74253340,
    name: "checkout___en",
    children: [{
      path: "billing",
      component: _462506e8,
      name: "billing___en"
    }, {
      path: "payment",
      component: _7b9cce97,
      name: "payment___en"
    }, {
      path: "shipping",
      component: _007c4b6d,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _2bebd1d8,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _74253340,
    name: "Checkout___en",
    children: [{
      path: "Billing",
      component: _462506e8,
      name: "Checkout-Billing___en"
    }, {
      path: "Payment",
      component: _7b9cce97,
      name: "Checkout-Payment___en"
    }, {
      path: "Shipping",
      component: _007c4b6d,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _2bebd1d8,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/ContactUs",
    component: _a8277f58,
    name: "ContactUs___en"
  }, {
    path: "/de",
    component: _3cd1e759,
    name: "home___de"
  }, {
    path: "/Home",
    component: _3cd1e759,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _4b9b7ad7,
    name: "MyAccount___en",
    children: [{
      path: "AdressBook",
      component: _6bf693f2,
      name: "MyAccount-AdressBook___en"
    }, {
      path: "BillingDetails",
      component: _225a2262,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _7a917d9e,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _337c0c0d,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _4c7ad005,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _d8049d12,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _0ec12d6e,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _c9335a48,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _7eabd565,
    name: "Product___en"
  }, {
    path: "/de/Category",
    component: _365e06f8,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _74253340,
    name: "checkout___de",
    children: [{
      path: "billing",
      component: _462506e8,
      name: "billing___de"
    }, {
      path: "payment",
      component: _7b9cce97,
      name: "payment___de"
    }, {
      path: "shipping",
      component: _007c4b6d,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _2bebd1d8,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _74253340,
    name: "Checkout___de",
    children: [{
      path: "Billing",
      component: _462506e8,
      name: "Checkout-Billing___de"
    }, {
      path: "Payment",
      component: _7b9cce97,
      name: "Checkout-Payment___de"
    }, {
      path: "Shipping",
      component: _007c4b6d,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _2bebd1d8,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/ContactUs",
    component: _a8277f58,
    name: "ContactUs___de"
  }, {
    path: "/de/Home",
    component: _3cd1e759,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _4b9b7ad7,
    name: "MyAccount___de",
    children: [{
      path: "AdressBook",
      component: _6bf693f2,
      name: "MyAccount-AdressBook___de"
    }, {
      path: "BillingDetails",
      component: _225a2262,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _7a917d9e,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _337c0c0d,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _4c7ad005,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _d8049d12,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _0ec12d6e,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _c9335a48,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _7eabd565,
    name: "Product___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _4b9b7ad7,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _7eabd565,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _365e06f8,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _4b9b7ad7,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _7eabd565,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _365e06f8,
    name: "category___en"
  }, {
    path: "/",
    component: _3cd1e759,
    name: "home___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
