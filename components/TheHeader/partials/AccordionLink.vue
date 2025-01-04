<script setup lang="ts">
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
  <div ref="menuRef" class="-mx-3">
    <button
      type="button"
      class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
      aria-controls="disclosure-1"
      aria-expanded="false"
      @click="toggleMenu"
    >
      <span class="transition-all border-b-2 border-b-transparent hover:border-b-primary-400">
        {{ data.emoji }} {{ data.label }}</span
      >
      <IconArrowDown
        class="arrow-icon"
        :class="{
          'arrow-up': menuOpen,
        }"
      />
    </button>
    <Transition name="flyout">
      <div v-if="menuOpen" id="disclosure-1" class="mt-2 space-y-2">
        <NuxtLink
          v-for="sublink in data.sublinks"
          :key="sublink.title"
          :href="sublink.path"
          :target="sublink.target"
          class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50 uppercase"
        >
          <span class="inline-block transition-all border-b-2 border-b-transparent hover:border-b-primary-400"
            >{{ sublink.emoji }} {{ sublink.title }}</span
          >
        </NuxtLink>
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
