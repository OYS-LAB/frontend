import { useRecoilState } from 'recoil';
import { sideMenuVisiblSetate, sideMenuStylesMap } from 'atoms/sideMenu';

const useSideMenuMode = () => {
  const [sideMenuVisible, setSideMenuVisible] =
    useRecoilState(sideMenuVisiblSetate);

  const handleToggle = () => {
    setSideMenuVisible(sideMenuVisible === 'HIDE' ? 'VISIBLE' : 'HIDE');
  };

  const isVisible = sideMenuVisible === 'VISIBLE';

  return {
    ...sideMenuStylesMap[sideMenuVisible],
    isVisible,
    handleToggle,
  };
};

export default useSideMenuMode;
