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
    aria-label="My Favorite Images"
  >
    <SplideSlide>
      <TheBanner
        :data="{
          align: 'center',
          banner_type: 'tertiary',
          title: 'Saborosas, nutritivas e 100% feitas de plantas',
          subtitle: 'Preparadas na nossa cozinha e entregues à tua casa.',
          image: {
            url: 'https://i.pinimg.com/1200x/5a/05/ab/5a05ab9c9fd32b6383b51b8151200c0e.jpg',
            alt: 'Promoção Especial',
            copyright: '© 2025 Sua Empresa',
          },
          background_color: '#fff',
          text_color: 'black',
          call_to_action: 'Ver o menu',
          path: '/ofertas',
          target: '_self',
        }"
      />
    </SplideSlide>
    <SplideSlide>
      <TheBanner
        :data="{
          align: 'left',
          banner_type: 'primary',
          title: 'Saborosas, nutritivas e 100% feitas de plantas',
          subtitle: 'Preparadas na nossa cozinha e entregues à tua casa.',
          image: {
            url: 'https://media.istockphoto.com/id/1457433817/pt/foto/group-of-healthy-food-for-flexitarian-diet.jpg?s=1024x1024&w=is&k=20&c=spr4uMDHBdo_cEefm-mk6gNwBam5yPY_1ijURXU_FWA=',
            alt: 'Promoção Especial',
            copyright: '© 2025 Sua Empresa',
          },
          background_color: 'black',
          text_color: 'white',
          call_to_action: 'Ver o menu',
          path: '/ofertas',
          target: '_self',
        }"
      />
    </SplideSlide>
    <SplideSlide>
      <TheBanner
        :data="{
          align: 'right',
          banner_type: 'secondary',
          title: 'Saborosas, nutritivas e 100% feitas de plantas',
          subtitle: 'Preparadas na nossa cozinha e entregues à tua casa.',
          image: {
            url: 'https://media.istockphoto.com/id/1468860049/pt/foto/fitness-woman-eating-a-healthy-poke-bowl-in-the-kitchen-at-home.jpg?s=1024x1024&w=is&k=20&c=rtHGu_pqFcN0he8y3ORxl50p3hc_PvG1FKai0IBLKn8=',
            alt: 'Promoção Especial',
            copyright: '© 2025 Sua Empresa',
          },
          background_color: '#fff',
          text_color: 'black',
          call_to_action: 'Ver o menu',
          path: '/ofertas',
          target: '_self',
        }"
      />
    </SplideSlide>
  </Splide>
</template>
