<template>
<div>
  <h1>Contact Us</h1>
<<<<<<< HEAD
  <div v-html="content.body"/>
=======
  <div v-html="contents"/>
>>>>>>> upstream/master
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
<<<<<<< HEAD
      content,
=======
      contents,
>>>>>>> upstream/master
      search
    } = useContent('pageContents');
    onSSR(async () => {
      await search({ slug: 'who-we-are', ContentType: 'page' });
    });
    return {
<<<<<<< HEAD
      content,
=======
      contents,
>>>>>>> upstream/master
      contextsLoading
    };
  }
};
</script>
