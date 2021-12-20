require('isomorphic-fetch');
import webpack from 'webpack';

/** @type { import('@nuxt/types').NuxtConfig } */ 
const config = {
  server: {
    port: 3001,
    host: '0.0.0.0'
  },
  publicRuntimeConfig: {
    appKey: 'vsf2spcon_',
    appVersion: Date.now()
  },
  privateRuntimeConfig: {
    storeURL: process.env.SHOPIFY_DOMAIN,
    storeToken: process.env.SHOPIFY_STOREFRONT_TOKEN
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['font'].includes(type)
      }
    },
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  },
  serverMiddleware: [
    { path: '/custom', handler: '~/server-middleware/custom-features.js' }
  ],
  head: {
    title: 'Shopify | Vue Storefront Next',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#5ece7b' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  loading: { color: '#fff' },
  plugins: [
    '~/plugins/scrollToTop.client.js'
  ],
  buildModules: [
    // to core
    '@nuxtjs/composition-api/module',
    '@nuxtjs/pwa',
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
    '@nuxtjs/device',
    [
      '@vue-storefront/nuxt',
      {
        useRawSource: {
          dev: ['@vue-storefront/shopify', '@vue-storefront/core'],
          prod: ['@vue-storefront/shopify', '@vue-storefront/core']
        }
      }
    ],
    ['@vue-storefront/nuxt-theme'],
    [
      '@vue-storefront/shopify/nuxt',
      {
        i18n: {
          useNuxtI18nConfig: true
        }
      }
    ]
  ],
  modules: [
    'nuxt-i18n',
    'cookie-universal-nuxt',
    'vue-scrollto/nuxt',
    '@vue-storefront/middleware/nuxt'
  ],
  i18n: {
    currency: 'USD',
    country: 'US',
    countries: [
      { name: 'US', label: 'United States' },
      { name: 'AT', label: 'Austria' },
      { name: 'DE', label: 'Germany' },
      { name: 'NL', label: 'Netherlands' }
    ],
    currencies: [
      { name: 'EUR', label: 'Euro' },
      { name: 'USD', label: 'Dollar' }
    ],
    locales: [
      {
        code: 'en',
        label: 'English',
        file: 'en.js',
        iso: 'en'
      },
      {
        code: 'de',
        label: 'German',
        file: 'de.js',
        iso: 'de'
      }
    ],
    defaultLocale: 'en',
    lazy: true,
    seo: true,
    langDir: 'lang/',
    vueI18n: {
      fallbackLocale: 'en',
      numberFormats: {
        en: {
          currency: {
            style: 'currency',
            currency: 'USD',
            currencyDisplay: 'symbol'
          }
        },
        de: {
          currency: {
            style: 'currency',
            currency: 'EUR',
            currencyDisplay: 'symbol'
          }
        }
      }
    },
    detectBrowserLanguage: {
      cookieKey: 'vsf-locale'
    }
  },
  styleResources: {
    scss: [
      require.resolve('@storefront-ui/shared/styles/_helpers.scss', {
        paths: [process.cwd()]
      })
    ]
  },
  build: {
    transpile: ['vee-validate/dist/rules'],
    plugins: [
      new webpack.DefinePlugin({
        'process.VERSION': JSON.stringify({
          // eslint-disable-next-line global-require
          version: require('./package.json').version,
          lastCommit: process.env.LAST_COMMIT || ''
        })
      })
    ],
    extend(config) {
      config.resolve.extensions.push('.mjs')
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      })
    },
    extractCSS: {
      ignoreOrder: true
    }
  },
  router: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    scrollBehavior(_to, _from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    }
  },
  pwa: {
    manifest: {
      name: 'VSF2: Shopify APP',
      lang: 'en',
      shortName: 'SPVSF2',
      startUrl: '/',
      display: 'standalone',
      backgroundColor: '#5ece7b',
      themeColor: '#5ece7b',
      description: 'This is the Shopify PWA app for VSF Next',
      icons: [
        {
          src: '/icons/android-icon-48x48.png',
          sizes: '48x48',
          type: 'image/png'
        },
        {
          src: '/icons/android-icon-72x72.png',
          sizes: '72x72',
          type: 'image/png'
        },
        {
          src: '/icons/android-icon-96x96.png',
          sizes: '96x96',
          type: 'image/png'
        },
        {
          src: '/icons/android-icon-144x144.png',
          sizes: '144x144',
          type: 'image/png'
        },
        {
          src: '/icons/android-icon-168x168.png',
          sizes: '168x168',
          type: 'image/png'
        },
        {
          src: '/icons/android-icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/icons/android-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    meta: {
      name: 'VSF2: Shopify APP',
      author: 'Aureate labs',
      backgroundColor: '#5ece7b',
      description:
        'This is the Shopify PWA app for VSF Next - Developed by Aureate labs',
      themeColor: '#5ece7b',
      ogHost: 'shopify-pwa.aureatelabs.com'
    },
    icon: {
      iconSrc: 'src/static/android-icon-512x512.png'
    },
    workbox: {
      offlineStrategy: 'StaleWhileRevalidate',
      runtimeCaching: [
        {
          // Match any request that ends with .png, .jpg, .jpeg or .svg .gif.
          urlPattern: /\.(?:png|jpg|jpeg|svg|woff|woff2|webp|json|gif)$/,
          // Apply a cache-first strategy.
          handler: "CacheFirst",
          options: {
            // Use a custom cache name.
            cacheName: "SPVSF2Assets",
            // Only cache 100 assets.
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 7200,
            },
          },
        },
        {
          urlPattern: process.env.NODE_ENV !== 'production' ? `//${process.env.BASE_URL}/.*` : `//${process.env.BASE_URL_PRODUCTION}/.*`,
          handler: 'CacheFirst',
          method: 'GET',
          strategyOptions: {cacheableResponse: {statuses: [0, 200]}}
        },
      ],
      preCaching: [
        '/favicon.ico',
        '/icon.png',
        '/country-state.json',
        '/error/error.svg',
        '/homepage/apple.png',
        '/homepage/bannerA.webp',
        '/homepage/bannerB.webp',
        '/homepage/bannerC.webp',
        '/homepage/bannerD.png',
        '/homepage/bannerE.webp',
        '/homepage/bannerF.webp',
        '/homepage/bannerG.webp',
        '/homepage/bannerH.webp',
        '/homepage/google.png',
        '/homepage/imageAd.webp',
        '/homepage/imageAm.webp',
        '/homepage/imageBd.webp',
        '/homepage/imageBm.webp',
        '/homepage/imageCd.webp',
        '/homepage/imageCm.webp',
        '/homepage/imageDd.webp',
        '/homepage/imageDm.webp',
        '/homepage/newsletter.webp',
        '/homepage/productA.webp',
        '/homepage/productB.webp',
        '/homepage/productC.webp',
      ]
    }
  }
};

export default config