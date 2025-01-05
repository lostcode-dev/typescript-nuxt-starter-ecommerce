import type { ProductHighlight } from '~/components/ProductHighlight/type';
import type { TheBanner } from '~/components/TheBanner/type';

//@to do fetch prismic
export const bannersMock = [
  {
    align: 'center',
    banner_type: 'tertiary',
    title: 'Refeições plant-based: Saudáveis e Cheias de Sabor!',
    subtitle: 'Feitas com ingredientes frescos e entregues diretamente à sua porta, com muito carinho.',
    image: {
      url: 'https://i.pinimg.com/1200x/5a/05/ab/5a05ab9c9fd32b6383b51b8151200c0e.jpg',
      alt: 'Promoção Especial',
      copyright: '© 2025 Sua Empresa',
    },
    background_color: '#fff',
    text_color: 'black',
    call_to_action: 'Veja nosso cardápio',
    path: '/ofertas',
    target: '_self',
  },
  {
    align: 'left',
    banner_type: 'primary',
    title: 'Alimente seu corpo com o melhor da natureza!',
    subtitle: 'Nossas refeições são feitas com ingredientes selecionados e entregues fresquinhas até você.',
    image: {
      url: 'https://media.istockphoto.com/id/1457433817/pt/foto/group-of-healthy-food-for-flexitarian-diet.jpg?s=1024x1024&w=is&k=20&c=spr4uMDHBdo_cEefm-mk6gNwBam5yPY_1ijURXU_FWA=',
      alt: 'Promoção Especial',
      copyright: '© 2025 Sua Empresa',
    },
    background_color: 'black',
    text_color: 'white',
    call_to_action: 'Explore as opções',
    path: '/ofertas',
    target: '_self',
  },
  {
    align: 'right',
    banner_type: 'secondary',
    title: 'Comida saudável, saborosa e repleta de benefícios!',
    subtitle: 'Nossas receitas equilibradas são preparadas com carinho e entregues frescas na sua casa.',
    image: {
      url: 'https://media.istockphoto.com/id/1468860049/pt/foto/fitness-woman-eating-a-healthy-poke-bowl-in-the-kitchen-at-home.jpg?s=1024x1024&w=is&k=20&c=rtHGu_pqFcN0he8y3ORxl50p3hc_PvG1FKai0IBLKn8=',
      alt: 'Promoção Especial',
      copyright: '© 2025 Sua Empresa',
    },
    background_color: '#fff',
    text_color: 'black',
    call_to_action: 'Confira agora',
    path: '/ofertas',
    target: '_self',
  },
] as TheBanner[];

export const productHighlightsMock: ProductHighlight[] = [
  {
    product_name: 'Feijoada à Brasileira',
    product_description:
      'Uma deliciosa feijoada vegana feita com ingredientes selecionados para garantir sabor e saúde.',
    image: {
      url: 'https://plantz.pt/cdn/shop/files/feijoada.png?v=1734717023',
      alt: 'Feijoada à Brasileira',
      copyright: '© Plantz.pt',
    },
    product_value: 6.9,
    path: '/products/feijoada-brasileira',
    target: '_self',
  },
  {
    product_name: 'Lasanha à Bolognese (Nova Receita)',
    product_description:
      'Uma lasanha vegana, repleta de camadas de sabor com uma nova receita ainda mais irresistível.',
    image: {
      url: 'https://plantz.pt/cdn/shop/files/lasanha.png?v=1734717067',
      alt: 'Lasanha à Bolognese (Nova Receita)',
      copyright: '© Plantz.pt',
    },
    product_value: 7.9,
    path: '/products/lasanha-a-bolognese-vegan',
    target: '_self',
  },
  {
    product_name: 'Strogonoff de Grão-de-bico & Cogumelos (Nova Receita)',
    product_description:
      'Uma versão vegana do clássico strogonoff, agora com uma receita aprimorada para conquistar o paladar.',
    image: {
      url: 'https://plantz.pt/cdn/shop/files/strogonoff.png?v=1734717214',
      alt: 'Strogonoff de Grão-de-bico & Cogumelos (Nova Receita)',
      copyright: '© Plantz.pt',
    },
    product_value: 6.9,
    path: '/products/strogonoff',
    target: '_self',
  },
  {
    product_name: 'Chili de 2 Feijões com Seitan',
    product_description:
      'Um chili vegano cheio de sabor, feito com dois tipos de feijões e seitan para uma refeição rica em proteínas.',
    image: {
      url: 'https://plantz.pt/cdn/shop/files/chili.png?v=1734716954',
      alt: 'Chili de 2 Feijões com Seitan',
      copyright: '© Plantz.pt',
    },
    product_value: 6.9,
    path: '/products/chilli',
    target: '_self',
  },
  {
    product_name: 'Feijoada à Brasileira',
    product_description:
      'Uma deliciosa feijoada vegana feita com ingredientes selecionados para garantir sabor e saúde.',
    image: {
      url: 'https://plantz.pt/cdn/shop/files/feijoada.png?v=1734717023',
      alt: 'Feijoada à Brasileira',
      copyright: '© Plantz.pt',
    },
    product_value: 6.9,
    path: '/products/feijoada-brasileira',
    target: '_self',
  },
  {
    product_name: 'Lasanha à Bolognese (Nova Receita)',
    product_description:
      'Uma lasanha vegana, repleta de camadas de sabor com uma nova receita ainda mais irresistível.',
    image: {
      url: 'https://plantz.pt/cdn/shop/files/lasanha.png?v=1734717067',
      alt: 'Lasanha à Bolognese (Nova Receita)',
      copyright: '© Plantz.pt',
    },
    product_value: 7.9,
    path: '/products/lasanha-a-bolognese-vegan',
    target: '_self',
  },
  {
    product_name: 'Strogonoff de Grão-de-bico & Cogumelos (Nova Receita)',
    product_description:
      'Uma versão vegana do clássico strogonoff, agora com uma receita aprimorada para conquistar o paladar.',
    image: {
      url: 'https://plantz.pt/cdn/shop/files/strogonoff.png?v=1734717214',
      alt: 'Strogonoff de Grão-de-bico & Cogumelos (Nova Receita)',
      copyright: '© Plantz.pt',
    },
    product_value: 6.9,
    path: '/products/strogonoff',
    target: '_self',
  },
  {
    product_name: 'Chili de 2 Feijões com Seitan',
    product_description:
      'Um chili vegano cheio de sabor, feito com dois tipos de feijões e seitan para uma refeição rica em proteínas.',
    image: {
      url: 'https://plantz.pt/cdn/shop/files/chili.png?v=1734716954',
      alt: 'Chili de 2 Feijões com Seitan',
      copyright: '© Plantz.pt',
    },
    product_value: 6.9,
    path: '/products/chilli',
    target: '_self',
  },
];
