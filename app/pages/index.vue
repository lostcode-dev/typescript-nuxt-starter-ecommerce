<script setup lang="ts">
import { bannersMock, productHighlightsMock } from './mock';

const runtimeConfig = useRuntimeConfig();
const env = runtimeConfig.public;

useSeoMeta({
  titleTemplate: `${env.siteName}`,
  description: env.siteDescription,
});
</script>

<template>
  <NuxtLayout name="default">
    <TheBannerSlide :data="bannersMock" />
    <ProductHighlightSlide :data="productHighlightsMock" />
  </NuxtLayout>
</template>
