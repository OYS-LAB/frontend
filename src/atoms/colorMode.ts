import { atom } from 'recoil';

export type ColorMode = 'LIGHT' | 'DARK';
export type ColorValue = '#fff' | '#000';
export interface ColorState {
  baseColor: ColorValue;
  reverseColor: ColorValue;
}

export type ColorStateMap = {
  [key in ColorMode]: ColorState;
};

export const colorStateMap: ColorStateMap = {
  LIGHT: {
    baseColor: '#fff',
    reverseColor: '#000',
  },
  DARK: {
    baseColor: '#000',
    reverseColor: '#fff',
  },
};

export const colorModeState = atom<ColorMode>({
  key: 'colorModeState',
  default: 'LIGHT',
});
