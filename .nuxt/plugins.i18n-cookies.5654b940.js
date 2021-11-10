const { VSF_CURRENCY_COOKIE, VSF_COUNTRY_COOKIE } = require('@vue-storefront/core');

const i18nCookiesPlugin = ({ $cookies }) => {
  const i18n = {"currency":"USD","country":"US","countries":[{"name":"US","label":"United States"},{"name":"AT","label":"Austria"},{"name":"DE","label":"Germany"},{"name":"NL","label":"Netherlands"}],"currencies":[{"name":"EUR","label":"Euro"},{"name":"USD","label":"Dollar"}],"locales":[{"code":"en","label":"English","file":"en.js","iso":"en"},{"code":"de","label":"German","file":"de.js","iso":"de"}],"defaultLocale":"en","lazy":true,"seo":true,"langDir":"lang\u002F","vueI18n":{"fallbackLocale":"en","numberFormats":{"en":{"currency":{"style":"currency","currency":"USD","currencyDisplay":"symbol"}},"de":{"currency":{"style":"currency","currency":"EUR","currencyDisplay":"symbol"}}}},"detectBrowserLanguage":{"cookieKey":"vsf-locale"}};

  const settings = {
    defaultLocale: i18n.defaultLocale || (i18n.locales.length && i18n.locales[0].code),
    currency: i18n.currency || (i18n.currencies.length && i18n.currencies[0].name),
    country: i18n.country || (i18n.countries.length && i18n.countries[0].name)
  };

  const missingFields = Object
    .entries(settings)
    .reduce((carry, [name, value]) => {
      !value && carry.push(name);

      return carry;
    }, []);

  if (missingFields.length) {
    throw new Error(`Following fields are missing in the i18n configuration: ${ missingFields.join(', ') }`);
  }

  const cookieOptions = {
    path: '/',
    sameSite: 'lax',
    expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)) // Year from now
  };

  !$cookies.get(VSF_CURRENCY_COOKIE) && $cookies.set(VSF_CURRENCY_COOKIE, settings.currency, cookieOptions);
  !$cookies.get(VSF_COUNTRY_COOKIE) && $cookies.set(VSF_COUNTRY_COOKIE, settings.country, cookieOptions);
};

export default i18nCookiesPlugin;
