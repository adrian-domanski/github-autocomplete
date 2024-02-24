export enum KeyCodes {
  ArrowUp = 'ArrowUp',
  ArrowDown = 'ArrowDown',
  Enter = 'Enter',
  Escape = 'Escape',
}

export interface SearchOption {
  name: string;
  type: SearchOptionType;
}

export interface AutocompleteConfig {
  minChars: number;
  length: number;
  debounceDelayMS: number;
}

export type SearchOptionType = 'Repository' | 'Profile';

export const BASE_URL = 'https://github.com/';
export const API_URL = 'https://api.github.com/';
