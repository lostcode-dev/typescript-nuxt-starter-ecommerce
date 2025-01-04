<script setup lang="ts">
import AccordionLink from './partials/AccordionLink.vue';
import FlyoutMenu from './partials/FlyoutMenu.vue';
import TheBrand from './partials/TheBrand.vue';

import type { TheHeader } from './types';

defineProps<{ data: TheHeader }>();

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="bg-white">
    <!-- Desktop menu -->
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <TheBrand :data="data" />
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="toggleMenu"
        >
          <!-- @to do -->
          <span class="sr-only">Open main menu</span>
          <IconHamburguer />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <template v-for="link in data.links" :key="link.label">
          <FlyoutMenu v-if="!link.path" :data="link" />
          <NuxtLink
            v-else
            :href="link.path"
            :target="link.target"
            class="text-sm/6 font-semibold text-gray-900 transition-all border-b-2 border-b-transparent hover:border-b-primary-400 cursor-pointer"
          >
            {{ link.emoji }} {{ link.label }}
          </NuxtLink>
        </template>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <!-- @to do -->
        <a href="#" class="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>

    <!-- Mobile menu -->
    <div class="lg:hidden overflow-hidden" role="dialog" aria-modal="true">
      <Transition name="opacity">
        <div v-show="isMenuOpen" class="fixed inset-0 z-50 bg-gray-500 opacity-40"></div>
      </Transition>

      <Transition name="slide">
        <div
          v-show="isMenuOpen"
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-white-50 shadow-xl"
        >
          <div class="flex items-center justify-between">
            <TheBrand :data="data" />

            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="toggleMenu">
              <!-- @to do -->
              <span class="sr-only">Close menu</span>
              <IconClose
                class="transition-all"
                :class="{
                  'rotate-0': isMenuOpen,
                  'rotate-180': !isMenuOpen,
                }"
              />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <template v-for="link in data.links" :key="link.label">
                  <AccordionLink v-if="!link.path" :data="link" />
                  <NuxtLink
                    v-else
                    :href="link.path"
                    :target="link.target"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 cursor-pointer"
                  >
                    <span class="inline-block transition-all border-b-2 border-b-transparent hover:border-b-primary-400"
                      >{{ link.emoji }} {{ link.label }}</span
                    >
                  </NuxtLink>
                </template>
              </div>
              <div class="py-6">
                <!-- @to do -->
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >Log in</a
                >
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition:
    right 0.6s ease,
    opacity 0.6s ease;
}

.slide-enter-from {
  right: -100%;
  opacity: 0;
}

.slide-enter-to {
  right: 0;
  opacity: 1;
}

.slide-leave-from {
  right: 0;
  opacity: 1;
}

.slide-leave-to {
  right: -100%;
  opacity: 0;
}

.opacity-enter-active,
.opacity-leave-active {
  opacity: 0;
  transition: opacity 0.2s ease;
}
</style>
