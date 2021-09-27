module.exports = {
  integrations: {
    shopify: {
      location: '@vue-storefront/shopify-api/server',
      configuration: {
        api: {
          domain: '<SHOPIFY STORE DOMAIN>',
          storefrontAccessToken: '<SHOPIFY STORE ACCESS TOKEN>'
        },
        currency: 'USD',
        country: 'US'
      }
    }
  }
};
