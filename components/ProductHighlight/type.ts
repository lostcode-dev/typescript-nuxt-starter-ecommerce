export type ProductHighlight = {
  product_name: string;
  product_description: string;
  image: { url: string; alt: string; copyright: string };
  product_value: number;
  path: string;
  target: '_self' | '_blank';
};
