<script setup lang="ts">
import type { TheBrand } from '../types';

defineProps<{ data: TheBrand }>();
</script>

<template>
  <NuxtLink href="/" class="-m-1.5 p-1.5">
    <span class="sr-only">{{ data.company_name }}</span>
    <img class="h-8 w-auto" :src="data.company_brand.url" :alt="data.company_name" />
  </NuxtLink>
</template>
