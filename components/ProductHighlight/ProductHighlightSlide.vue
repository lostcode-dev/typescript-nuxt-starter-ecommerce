<script lang="ts" setup>
// @ts-expect-error
import { Splide, SplideSlide } from '@splidejs/vue-splide';

import '@splidejs/vue-splide/css';

import type { ProductHighlight } from './type';

defineProps<{ data: ProductHighlight[] }>();

const sliderOptions = {
  autoWidth: true,
  rewind: true,
  loop: true,
  gap: '1.5rem',

  autoplay: true,
  interval: 5000,
  snap: true,

  pagination: false,
  arrows: false,
};
</script>

<template>
  <div class="mt-8 pb-8 overflow-hidden px-6 xl:px-0">
    <!-- @to do translate-->
    <div class="overflow-hidden grid gap-6">
      <h2 class="text-4xl font-bold text-gray-700">Em destaque</h2>
      <Splide class="cursor-pointer" :options="sliderOptions" aria-label="The Product Highlight Slide">
        <SplideSlide v-for="(product, key) in data" :key="key">
          <ProductHighlightCard :data="product" />
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>
