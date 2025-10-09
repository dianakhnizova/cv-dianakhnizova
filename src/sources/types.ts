import type { MouseEvent } from 'react';
import type { Theme } from './enums';

export type PageTitle = Record<string, string>;
export type LinkItems = {
  to: string;
  label: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export type MyData = {
  label: string;
  data: string;
};

export type Interest = {
  image: string;
  title: string;
};

export type Project = {
  title: string;
  description: string;
  language: string;
  image: string;
};
export type ThemeType = Theme.Dark | Theme.Light;
