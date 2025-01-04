export type TheSublink = { emoji: string; title: string; subtitle: string; path: string; target: '_self' | '_blank' };

export type TheBrand = { company_name: string; company_brand: string };

export interface TheHeaderLink {
  emoji: string;
  label: string;
  path: string | null;
  target?: '_self' | '_blank';
  sublinks?: TheSublink[];
}

export type TheHeader = {
  company_name: string;
  company_brand: string;
  links: TheHeaderLink[];
};
