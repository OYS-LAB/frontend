import { atom } from 'recoil';

export type ColorModeState = 'LIGHT' | 'DARK';

export type ColorStateMap = {
  [key in ColorModeState]: {
    backgroundColor1: '#fff' | '#000';
    backgroundColor2: '#000' | '#fff';
    textcolor1: '#000' | '#fff';
    textcolor2: '#fff' | '#000';
    borderColor: '#000' | '#fff';
  };
};

export const colorStateMap: ColorStateMap = {
  LIGHT: {
    backgroundColor1: '#fff',
    backgroundColor2: '#000',
    textcolor1: '#000',
    textcolor2: '#fff',
    borderColor: '#000',
  },
  DARK: {
    backgroundColor1: '#000',
    backgroundColor2: '#fff',
    textcolor1: '#fff',
    textcolor2: '#000',
    borderColor: '#fff',
  },
};

export const colorModeState = atom<ColorModeState>({
  key: 'colorModeState',
  default: 'LIGHT',
});
