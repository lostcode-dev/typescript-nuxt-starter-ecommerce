<script setup lang="ts"></script>

<template>
  <NuxtLayout name="default">
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
  </NuxtLayout>
</template>
