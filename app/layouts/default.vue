<script setup lang="ts">
import type { TheHeader } from '~/components/TheHeader/types';

const UID_HEADER = 'header';
const { client } = usePrismic();
const { data: header } = await useAsyncData(UID_HEADER, () => client.getSingle(UID_HEADER));

const normalizedHeader = computed(() => {
  const value = header.value?.data as TheHeader;
  if (!!value) {
    return {
      ...value,
      links: value.links.map((item) => {
        const sublinks = (item.sublinks as unknown as { text: string }[])?.[0]?.text;
        return {
          ...item,
          sublinks: !!sublinks ? JSON.parse(sublinks) : [],
        };
      }),
    };
  }
  return {} as TheHeader;
});
</script>

<template>
  <div>
    <TheHeader :data="normalizedHeader" />
    <slot></slot>
  </div>
</template>
