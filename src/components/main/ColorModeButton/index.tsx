import useColorMode from 'hooks/useColorMode';
import useHiddenMenu from 'hooks/useHiddenMenu';
import * as $ from './styles';

const ColorModeButton = () => {
  const {
    handleToggle,
    backgroundColor1,
    backgroundColor2,
    textColor1,
    textColor2,
    borderColor,
  } = useColorMode();
  const {
    colorButtonDisplay,
    isVisible: isHiddenMenuVisible,
    display,
  } = useHiddenMenu();
  const { colorMode } = useColorMode();

  return (
    <$.Button
      aria-label="dark-light"
      onClick={handleToggle}
      backgroundColor={backgroundColor1}
      textColor={textColor1}
      backgroundColor2={backgroundColor2}
      textColor2={textColor2}
      borderColor={borderColor}
      colorButtonDisplay={colorButtonDisplay}
      isHiddenMenuVisible={isHiddenMenuVisible}
    >
      <$.DarkLightIcon colorMode={colorMode} />
    </$.Button>
  );
};

export default ColorModeButton;
