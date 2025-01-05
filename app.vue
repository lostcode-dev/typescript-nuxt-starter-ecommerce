<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
const env = runtimeConfig.public;

useHead({
  meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: {
    lang: 'pt-PT',
  },
});

useSeoMeta({
  titleTemplate: `%s - ${env.siteName}`,
  description: env.siteDescription,
  ogTitle: env.siteName,
  ogDescription: env.siteDescription,
  ogImage: env.socialCard,
  twitterImage: env.socialCard,
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <NuxtPage />
</template>

<style></style>
