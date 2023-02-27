import { useRecoilState } from 'recoil';
import { colorModeState, colorStateMap } from 'atoms/colorMode';

const useColorMode = () => {
  const [colorMode, setColorMode] = useRecoilState(colorModeState);

  const handleToggle = () => {
    setColorMode(colorMode === 'LIGHT' ? 'DARK' : 'LIGHT');
  };

  const isDark = colorMode === 'DARK';

  return {
    ...colorStateMap[colorMode],
    colorMode: colorMode,
    isDark,
    handleToggle,
  };
};

export default useColorMode;
