import { atom } from 'recoil';

export type ColorMode = 'LIGHT' | 'DARK';

export interface ColorState {
  mode: ColorMode;
  backgroundColor1: string;
  textColor1: string;
  borderColor: string;
  backgroundColor2: string; // cart background
  textColor2: string; //cart color
}

export const LIGHT_COLOR: ColorState = {
  mode: 'LIGHT',
  backgroundColor1: '#fff',
  textColor1: '#000',
  borderColor: '#000',
  backgroundColor2: '#000',
  textColor2: '#fff',
};

export const DARK_COLOR: ColorState = {
  mode: 'DARK',
  backgroundColor1: '#000',
  textColor1: '#fff',
  borderColor: '#fff',
  backgroundColor2: '#fff',
  textColor2: '#000',
};

export const colorState = atom<ColorState>({
  key: 'colorState',
  default: LIGHT_COLOR,
});
