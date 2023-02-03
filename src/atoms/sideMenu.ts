import { atom } from 'recoil';

export type SideMenuVisibleState = 'VISIBLE' | 'HIDE';

export type SideMenuStylesMap = {
  [key in SideMenuVisibleState]: {
    height: '110px' | '30px';
    display: 'none' | 'block';
    contentDisplay: 'none' | 'block';
    sideMenuDisplay: 'none' | 'block';
    searchButtonDisplay: 'none' | 'block';
    colorButtonDisplay: '0 auto' | 'block';
  };
};

export const sideMenuStylesMap: SideMenuStylesMap = {
  VISIBLE: {
    height: '110px',
    display: 'block',
    contentDisplay: 'none',
    sideMenuDisplay: 'block',
    searchButtonDisplay: 'none',
    colorButtonDisplay: '0 auto',
  },
  HIDE: {
    height: '30px',
    display: 'none',
    contentDisplay: 'block',
    sideMenuDisplay: 'none',
    searchButtonDisplay: 'block',
    colorButtonDisplay: 'block',
  },
};

export const sideMenuVisiblSetate = atom<SideMenuVisibleState>({
  key: 'sideMenuVisiblSetate',
  default: 'HIDE',
});
