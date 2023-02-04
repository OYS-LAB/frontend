import { atom } from 'recoil';

export type ColorModeState = 'LIGHT' | 'DARK';

export type ColorStateMap = {
  [key in ColorModeState]: {
    backgroundColor1: '#fff' | '#000';
    backgroundColor2: '#000' | '#fff';
    textColor1: '#000' | '#fff';
    textColor2: '#fff' | '#000';
    borderColor: '#000' | '#fff';
    flakeColor: 'images/icon-dark-flake.png' | 'images/icon-light-flake.png';
  };
};

export const colorStateMap: ColorStateMap = {
  LIGHT: {
    backgroundColor1: '#fff',
    backgroundColor2: '#000',
    textColor1: '#000',
    textColor2: '#fff',
    borderColor: '#000',
    flakeColor: 'images/icon-dark-flake.png',
  },
  DARK: {
    backgroundColor1: '#000',
    backgroundColor2: '#fff',
    textColor1: '#fff',
    textColor2: '#000',
    borderColor: '#fff',
    flakeColor: 'images/icon-light-flake.png',
  },
};

export const colorModeState = atom<ColorModeState>({
  key: 'colorModeState',
  default: 'LIGHT',
});

// import { atom } from 'recoil';

// export type ColorMode = 'LIGHT' | 'DARK';

// export interface ColorState {
//   mode: ColorMode;
//   backgroundColor1: string;
//   textColor1: string;
//   borderColor: string;
//   backgroundColor2: string; // cart background
//   textColor2: string; //cart color
//   flakeColor: string;
// }

// export const LIGHT_COLOR: ColorState = {
//   mode: 'LIGHT',
//   backgroundColor1: '#fff',
//   textColor1: '#000',
//   borderColor: '#000',
//   backgroundColor2: '#000',
//   textColor2: '#fff',
//   flakeColor: 'images/icon-dark-flake.png',
// };

// export const DARK_COLOR: ColorState = {
//   mode: 'DARK',
//   backgroundColor1: '#000',
//   textColor1: '#fff',
//   borderColor: '#fff',
//   backgroundColor2: '#fff',
//   textColor2: '#000',
//   flakeColor: 'images/icon-light-flake.png',
// };

// export const colorState = atom<ColorState>({
//   key: 'colorState',
//   default: LIGHT_COLOR,
// });
