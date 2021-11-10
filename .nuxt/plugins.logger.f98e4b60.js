import { registerLogger } from '@vue-storefront/core'

const loggerPlugin = (ctx) => {
  const { verbosity, customLogger, ...args } = {};
  registerLogger(customLogger || args, verbosity || 'error')
};

export default loggerPlugin;
