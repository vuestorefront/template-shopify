module.exports = {
  integrations: {
    shopify: {
      location: '@vue-storefront/shopify-api/server',
      configuration: {
        api: {
          domain: '<DOMAIN>',
          storefrontAccessToken: '<TOKEN>'
        },
        currency: 'USD',
        country: 'US'
      }
    }
  }
};
