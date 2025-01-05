<script lang="ts" setup>
import type { ProductHighlight } from './type';

defineProps<{ data: ProductHighlight }>();
</script>

<template>
  <div class="relative max-w-52">
    <NuxtImg
      class="aspect-square w-full rounded-md bg-gray-200 object-cover object-center group-hover:opacity-75 lg:aspect-auto lg:h-60"
      :src="data.image.url"
      :alt="data.image.alt"
    />
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm font-bold text-gray-700">
          <UTooltip
            :text="data.product_name"
            :ui="{
              color: 'text-white-50',
            }"
            :popper="{ arrow: true }"
          >
            <NuxtLink class="line-clamp-1" :to="data.path" :target="data.target || '_self'">
              <span aria-hidden="true" class="absolute inset-0"></span>{{ data.product_name }}
            </NuxtLink>
          </UTooltip>
        </h3>
        <UTooltip
          :text="data.product_description"
          :ui="{
            color: 'text-white-50',
            width: 'max-w-max',
          }"
          :popper="{ arrow: true }"
        >
          <p class="mt-1 text-sm text-gray-500 line-clamp-2">{{ data.product_description }}</p>
        </UTooltip>
      </div>
      <p class="text-sm font-semibold text-gray-900">
        {{
          data.product_value.toLocaleString('pt-PT', {
            style: 'currency',
            currency: 'EUR',
          })
        }}
      </p>
    </div>
  </div>
</template>
