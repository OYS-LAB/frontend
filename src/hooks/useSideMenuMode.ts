import { useRecoilState } from 'recoil';
import { sideMenuState, SHOW_MENU, HIDE_MENU } from 'atoms/sideMenuMode';

const useSideMenuMode = () => {
  const [appearance, setAppearance] = useRecoilState(sideMenuState);

  const handleToggle = () => {
    console.log('click');
    setAppearance(appearance.mode === 'HIDE' ? SHOW_MENU : HIDE_MENU);
  };

  const closeToggle = () => {
    console.log('bye');
    setAppearance(appearance.mode === 'SHOW' ? HIDE_MENU : HIDE_MENU);
  };
  return {
    ...appearance,
    handleToggle,
    closeToggle,
  };
};

export default useSideMenuMode;
