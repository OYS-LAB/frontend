import { atom } from 'recoil';

export type HiddenMenuVisibleState = 'VISIBLE' | 'HIDE';

export type HiddenMenuStylesMap = {
  [key in HiddenMenuVisibleState]: {
    height: '110px' | '30px';
    display: 'none' | 'block';
    contentDisplay: 'none' | 'block';
    hiddenMenuDisplay: 'none' | 'block';
    searchButtonDisplay: 'none' | 'block';
    colorButtonDisplay: '0 auto' | 'block';
  };
};

export const hiddenMenuStylesMap: HiddenMenuStylesMap = {
  VISIBLE: {
    height: '110px',
    display: 'block',
    contentDisplay: 'none',
    hiddenMenuDisplay: 'block',
    searchButtonDisplay: 'none',
    colorButtonDisplay: '0 auto',
  },
  HIDE: {
    height: '30px',
    display: 'none',
    contentDisplay: 'block',
    hiddenMenuDisplay: 'none',
    searchButtonDisplay: 'block',
    colorButtonDisplay: '0 auto',
  },
};

export const hiddenMenuVisibleState = atom<HiddenMenuVisibleState>({
  key: 'hiddenMenuVisibleState',
  default: 'HIDE',
});
