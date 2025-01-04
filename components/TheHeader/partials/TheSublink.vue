<script setup lang="ts">
import type { TheSublink } from '../types';

defineProps<{ data: TheSublink }>();
</script>

<template>
  <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-black-50">
    <div class="flex size-11 flex-none items-center justify-center rounded-lg bg-white-50 group-hover:bg-white">
      {{ data.emoji }}
    </div>
    <div class="flex-auto">
      <NuxtLink
        :href="data.path"
        :target="data.target"
        class="inline-block font-semibold text-gray-900 uppercase transition-all border-b-2 border-b-transparent hover:border-b-primary-400"
      >
        <span>{{ data.title }}</span>
        <span class="absolute inset-0"></span>
      </NuxtLink>
      <p class="mt-1 text-black-600">{{ data.subtitle }}</p>
    </div>
  </div>
</template>
