<script lang="ts" setup>
import type { TheBanner } from './type';

defineProps<{ data: TheBanner }>();
</script>

<template>
  <div class="w-full h-[500px] relative justify-center items-center">
    <div
      class="w-full h-full flex items-center bg-black bg-opacity-50 text-white max-w-7xl mx-auto relative z-10 px-10"
      :class="{
        'justify-start': data.align === 'left',
        'justify-center ': data.align === 'center',
        'justify-end': data.align === 'right',
      }"
    >
      <div
        class="px-8 max-w-lg"
        :class="{
          'text-left': data.align === 'left',
          'text-center ': data.align === 'center',
          'text-right': data.align === 'right',
          'text-white-50': data.text_color === 'white',
          'text-black-900': data.text_color === 'black',
          'text-primary-600': data.text_color === 'primary',
          'text-secondary-700': data.text_color === 'secondary',
          'drop-shadow-sm  p-12 rounded-lg': !!data.background_color,
        }"
        :style="{
          'background-color': data.background_color,
        }"
      >
        <h2 v-if="data.title" class="text-4xl font-bold drop-shadow-lg">{{ data.title }}</h2>
        <p v-if="data.subtitle" class="mt-4 font-light text-lg drop-shadow-lg">{{ data.subtitle }}</p>

        <div v-if="data.call_to_action && data.path">
          <NuxtLink
            :to="data.path"
            :target="data.target || '_self'"
            :class="{
              'bg-primary-600 text-secondary-100': data?.banner_type === 'primary',
              'bg-secondary-600 text-gray-50': data?.banner_type === 'secondary',
              'border-2 border-black-900 bg-white-50 text-black-900': data?.banner_type === 'tertiary',
              'bg-yellow-700 text-gray-50': data?.banner_type === 'quaternary',
              'bg-orange-700 text-gray-50': data?.banner_type === 'quinary',
              'bg-purple-700 text-gray-50': data?.banner_type === 'senary',
            }"
            class="mt-6 inline-block px-6 py-3 text-lg font-semibold text-white rounded-lg shadow-lg transition duration-200 hover:bg-opacity-90 hover:scale-125"
          >
            {{ data.call_to_action }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="absolute top-0 left-0 w-full h-full object-cover flex items-center justify-center">
      <!--  @to do https://stunningui.design/components/particles-effect -->
      <NuxtImg
        class="w-full h-full object-cover max-w-screen-2xl relative"
        :src="data.image.url"
        :alt="data.image.alt"
      />
    </div>
  </div>
</template>
