<template>
<div>
  <h1>Contact Us</h1>
  <div v-html="contents"/>
</div>
</template>

<script>
import { useContent } from '@vue-storefront/shopify';
import { onSSR } from '@vue-storefront/core';

export default {
  name: 'ContactUs',
  transition: 'fade',
  setup() {
    const {
      loading: contextsLoading,
      contents,
      search
    } = useContent('pageContents');
    onSSR(async () => {
      await search({ slug: 'who-we-are', ContentType: 'page' });
    });
    return {
      contents,
      contextsLoading
    };
  }
};
</script>
