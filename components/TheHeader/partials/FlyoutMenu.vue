<script setup lang="ts">
import TheSublink from './TheSublink.vue';

import type { TheHeaderLink } from '../types';

const menuOpen = ref(false);

const menuRef = ref<HTMLElement | null>(null);

onClickOutside(menuRef, () => {
  menuOpen.value = false;
});

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

defineProps<{ data: TheHeaderLink }>();
</script>

<template>
  <div ref="menuRef" class="relative bg-gray-50">
    <button
      type="button"
      class="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900"
      aria-expanded="false"
      @click="toggleMenu"
    >
      {{ data.emoji }}
      {{ data.label }}
      <IconArrowDown
        class="arrow-icon"
        :class="{
          'arrow-up': menuOpen,
        }"
      />
    </button>

    <Transition name="flyout">
      <div
        v-if="menuOpen"
        class="absolute -left-8 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 bg-gray-50"
      >
        <div class="px-4 py-2">
          <TheSublink v-for="sublink in data.sublinks" :key="sublink.title" :data="sublink" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.flyout-enter-active,
.flyout-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.flyout-enter,
.flyout-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.flyout-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.flyout-enter-to {
  opacity: 1;
  transform: translateY(0px);
}

.arrow-icon {
  transition: transform 0.3s ease;
  transform: rotate(0deg);
}

.arrow-up {
  transform: rotate(180deg);
}
</style>
