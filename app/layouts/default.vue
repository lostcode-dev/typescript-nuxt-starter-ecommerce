<template>
  <div>
    <TheHeader
      :data="{
        company_name: 'Your Company',
        company_brand: 'https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600',
        links: [
          {
            emoji: '🛍️',
            label: 'Comprar',
            path: null,
            sublinks: [
              {
                emoji: '🍽️',
                title: 'refeições prontas',
                subtitle: 'Praticidade e sabor em cada prato.',
                path: '/refeicoes-prontas',
                target: '_self',
              },
              {
                emoji: '📦',
                title: 'packs e combos',
                subtitle: 'Pacotes econômicos para todas as ocasiões.',
                path: '/packs-e-combos',
                target: '_self',
              },
              {
                emoji: '🥂',
                title: 'doses duplas',
                subtitle: 'Promoções em dobro para curtir mais.',
                path: '/doses-duplas',
                target: '_self',
              },
              {
                emoji: '🛒',
                title: 'ver todos produtos',
                subtitle: 'Confira nossa linha completa.',
                path: '/todos-produtos',
                target: '_self',
              },
            ],
          },
          {
            emoji: '✈️',
            label: 'Envios Nacionais',
            path: '/refeicoes-prontas',
            target: '_self',
          },
          {
            emoji: '🏢',
            label: 'Sobre Nós',
            path: '/refeicoes-prontas',
            target: '_self',
          },
          {
            emoji: '❓',
            label: 'Faqs',
            path: '/refeicoes-prontas',
            target: '_self',
          },
          {
            emoji: '🎁',
            label: 'Resgatar Pontos',
            path: '/refeicoes-prontas',
            target: '_self',
          },
        ],
      }"
    />
    <slot></slot>
  </div>
</template>
