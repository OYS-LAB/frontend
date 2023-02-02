import { useRecoilState } from 'recoil';
import { colorState, LIGHT_COLOR, DARK_COLOR } from 'atoms/colorMode';

const useColorMode = () => {
  const [color, setColor] = useRecoilState(colorState);

  const handleToggle = () => {
    setColor(color.mode === 'LIGHT' ? DARK_COLOR : LIGHT_COLOR);
  };

  return {
    ...color,
    handleToggle,
  };
};

export default useColorMode;

/**
const useColorMode = () => {
  const [
    { mode, backgroundColor, color, borderColor, backgroundColor2, color2 },
    setColor,
  ] = useRecoilState(colorState);

  const handleToggle = () => {
    setColor(mode === 'LIGHT' ? DARK_COLOR : LIGHT_COLOR);
  };

  return {
    mode,
    backgroundColor,
    color,
    borderColor,
    backgroundColor2,
    color2,
    handleToggle,
  };
};
 */