import { atom } from 'recoil';

export type ToggleMode = 'SHOW' | 'HIDE';

export interface SideModeState {
  mode: ToggleMode;
  height: string;
  display: string;
  contentDisplay: string;
  sideMenuDisplay: string;
  searchButtonDisplay: string;
  colorButtonDisplay: string;
}

export const SHOW_MENU: SideModeState = {
  mode: 'SHOW',
  height: '110px',
  display: 'block',
  contentDisplay: 'none',
  sideMenuDisplay: 'block',
  searchButtonDisplay: 'none',
  colorButtonDisplay: '0 auto',
};

export const HIDE_MENU: SideModeState = {
  mode: 'HIDE',
  height: '30px',
  display: 'none',
  contentDisplay: 'block',
  sideMenuDisplay: 'none',
  searchButtonDisplay: 'block',
  colorButtonDisplay: 'block',
};

export const sideMenuState = atom<SideModeState>({
  key: 'sideMenuState',
  default: HIDE_MENU,
});
