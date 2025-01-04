export type TheBanner = {
  title: string;
  subtitle: string;
  image: { url: string; alt: string; copyright: string };
  align: 'left' | 'center' | 'right';
  banner_type: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary' | 'senary';
  background_color: string;
  text_color: 'white' | 'black' | 'primary' | 'secondary';
  call_to_action: string;
  path: string | null;
  target?: '_self' | '_blank';
};
