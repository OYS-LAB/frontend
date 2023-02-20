import { useRecoilState } from 'recoil';
import { hiddenMenuVisibleState, hiddenMenuStylesMap } from 'atoms/hiddenMenu';

const useHiddenMenu = () => {
  const [hiddenMenuVisible, setHiddenMenuVisible] = useRecoilState(
    hiddenMenuVisibleState
  );

  const handleToggle = () => {
    setHiddenMenuVisible(hiddenMenuVisible === 'HIDE' ? 'VISIBLE' : 'HIDE');
  };
  const closeToggle = () => {
    setHiddenMenuVisible(hiddenMenuVisible === 'VISIBLE' ? 'HIDE' : 'HIDE');
  };
  const isVisible = hiddenMenuVisible === 'VISIBLE';

  return {
    ...hiddenMenuStylesMap[hiddenMenuVisible],
    isVisible,
    handleToggle,
    closeToggle,
  };
};

export default useHiddenMenu;
