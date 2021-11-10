import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_vuescrollto_e56d63da from 'nuxt_plugin_vuescrollto_e56d63da' // Source: ./vue-scrollto.js (mode: 'client')
import nuxt_plugin_cookieuniversalnuxt_72fa7a44 from 'nuxt_plugin_cookieuniversalnuxt_72fa7a44' // Source: ./cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_pluginutils_1361b1c5 from 'nuxt_plugin_pluginutils_1361b1c5' // Source: ./nuxt-i18n/plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginseo_0a055b4e from 'nuxt_plugin_pluginseo_0a055b4e' // Source: ./nuxt-i18n/plugin.seo.js (mode: 'all')
import nuxt_plugin_pluginrouting_77bce1d0 from 'nuxt_plugin_pluginrouting_77bce1d0' // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_203bdb9f from 'nuxt_plugin_pluginmain_203bdb9f' // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')
import nuxt_plugin_nuxtplugin5ba1e86f_1187eed2 from 'nuxt_plugin_nuxtplugin5ba1e86f_1187eed2' // Source: ./nuxt.plugin.5ba1e86f.js (mode: 'all')
import nuxt_plugin_plugin_5f18c477 from 'nuxt_plugin_plugin_5f18c477' // Source: ./composition-api/plugin.js (mode: 'all')
import nuxt_plugin_pluginsi18ncookies5654b940_3dd6c58e from 'nuxt_plugin_pluginsi18ncookies5654b940_3dd6c58e' // Source: ./plugins.i18n-cookies.5654b940.js (mode: 'all')
import nuxt_plugin_pluginse2etesting49f6d2f3_24492351 from 'nuxt_plugin_pluginse2etesting49f6d2f3_24492351' // Source: ./plugins.e2e-testing.49f6d2f3.js (mode: 'all')
import nuxt_plugin_pluginsloggerf98e4b60_26da4ff4 from 'nuxt_plugin_pluginsloggerf98e4b60_26da4ff4' // Source: ./plugins.logger.f98e4b60.js (mode: 'all')
import nuxt_plugin_pluginsssrfc964948_79bba975 from 'nuxt_plugin_pluginsssrfc964948_79bba975' // Source: ./plugins.ssr.fc964948.js (mode: 'all')
import nuxt_plugin_pluginscontext56cba1c2_01d29616 from 'nuxt_plugin_pluginscontext56cba1c2_01d29616' // Source: ./plugins.context.56cba1c2.js (mode: 'all')
import nuxt_plugin_workbox_44abced2 from 'nuxt_plugin_workbox_44abced2' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_470bb836 from 'nuxt_plugin_metaplugin_470bb836' // Source: ./pwa/meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_3dbc6d4e from 'nuxt_plugin_iconplugin_3dbc6d4e' // Source: ./pwa/icon.plugin.js (mode: 'all')
import nuxt_plugin_scrollToTopclient_6f28b416 from 'nuxt_plugin_scrollToTopclient_6f28b416' // Source: ../plugins/scrollToTop.client.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Shopify | Vue Storefront Next","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"theme-color","content":"#5ece7b"},{"hid":"description","name":"description","content":"Vue Storefront 2 template for Shopify."},{"name":"generator","content":"Vue Storefront 2"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"preconnect","href":"https:\u002F\u002Ffonts.gstatic.com","crossorigin":"crossorigin"},{"rel":"preload","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap","as":"style"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap","media":"print","onload":"this.media='all'"}],"style":[],"script":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (process.client && typeof nuxt_plugin_vuescrollto_e56d63da === 'function') {
    await nuxt_plugin_vuescrollto_e56d63da(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_72fa7a44 === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_72fa7a44(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_1361b1c5 === 'function') {
    await nuxt_plugin_pluginutils_1361b1c5(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginseo_0a055b4e === 'function') {
    await nuxt_plugin_pluginseo_0a055b4e(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_77bce1d0 === 'function') {
    await nuxt_plugin_pluginrouting_77bce1d0(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_203bdb9f === 'function') {
    await nuxt_plugin_pluginmain_203bdb9f(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtplugin5ba1e86f_1187eed2 === 'function') {
    await nuxt_plugin_nuxtplugin5ba1e86f_1187eed2(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_5f18c477 === 'function') {
    await nuxt_plugin_plugin_5f18c477(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginsi18ncookies5654b940_3dd6c58e === 'function') {
    await nuxt_plugin_pluginsi18ncookies5654b940_3dd6c58e(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginse2etesting49f6d2f3_24492351 === 'function') {
    await nuxt_plugin_pluginse2etesting49f6d2f3_24492351(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginsloggerf98e4b60_26da4ff4 === 'function') {
    await nuxt_plugin_pluginsloggerf98e4b60_26da4ff4(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginsssrfc964948_79bba975 === 'function') {
    await nuxt_plugin_pluginsssrfc964948_79bba975(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginscontext56cba1c2_01d29616 === 'function') {
    await nuxt_plugin_pluginscontext56cba1c2_01d29616(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_44abced2 === 'function') {
    await nuxt_plugin_workbox_44abced2(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_470bb836 === 'function') {
    await nuxt_plugin_metaplugin_470bb836(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_3dbc6d4e === 'function') {
    await nuxt_plugin_iconplugin_3dbc6d4e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_scrollToTopclient_6f28b416 === 'function') {
    await nuxt_plugin_scrollToTopclient_6f28b416(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    const { route } = router.resolve(app.context.route.fullPath)
    // Ignore 404s rather than blindly replacing URL
    if (!route.matched.length && process.client) {
      return resolve()
    }
    router.replace(route, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
