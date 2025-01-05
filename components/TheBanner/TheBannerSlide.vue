<script lang="ts" setup>
// @ts-expect-error
import { Splide, SplideSlide } from '@splidejs/vue-splide';

import '@splidejs/vue-splide/css';

import type { TheBanner } from './type';

defineProps<{ data: TheBanner[] }>();
</script>

<template>
  <Splide
    class="cursor-pointer"
    :options="{
      rewind: true,
      loop: true,
      autoplay: true,
      interval: 5000,
      arrows: false,
    }"
    aria-label="The Banner Slide"
  >
    <SplideSlide v-for="(banner, key) in data" :key="key">
      <TheBanner :data="banner" />
    </SplideSlide>
  </Splide>
</template>
