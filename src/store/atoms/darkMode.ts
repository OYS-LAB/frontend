import { atom } from 'recoil';

// 다크 모드
export const DarkState = atom({
  key: 'dark',
  default: {
    mode: 'dark',
    backgroundColor: '#000',
    color: '#fff',
    borderColor: '#fff',
    // cart background
    backgroundColor2: '#fff',
    //cart color
    color2: '#000',
  },
});
// 라이트 모드
export const LightState = atom({
  key: 'light',
  default: {
    mode: 'light',
    backgroundColor: '#fff',
    color: '#000',
    borderColor: '#000',
    backgroundColor2: '#000',
    color2: '#fff',
  },
});

export const currentState = atom({
  key: 'currentMode',
  default: LightState,
});
