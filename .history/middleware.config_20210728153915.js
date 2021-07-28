module.exports = {
  integrations: {
    shopify: {
      location: '@vue-storefront/shopify-api/server',
      configuration: {
        api: {
<<<<<<< HEAD
          domain: '<SHOPIFY STORE DOMAIN>',
          storefrontAccessToken: '<SHOPIFY STORE ACCESS TOKEN>'
=======
          domain: 'STOREFRONT DOMAIN',
          storefrontAccessToken: 'ACCESS TOKEN'
>>>>>>> upstream/master
        },
        currency: 'USD',
        country: 'US'
      }
    }
  }
};
