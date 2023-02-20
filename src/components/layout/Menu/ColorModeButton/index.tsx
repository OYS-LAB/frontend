import useColorMode from 'hooks/useColorMode';
import useHiddenMenu from 'hooks/useHiddenMenu';
import * as $ from './styles';

const ColorModeButton = () => {
  const {
    handleToggle,
    backgroundColor1,
    backgroundColor2,
    textcolor1,
    textcolor2,
    borderColor,
  } = useColorMode();
  const { colorButtonDisplay } = useHiddenMenu();
  const { colorMode } = useColorMode();

  return (
    <$.Button
      aria-label="dark-light"
      onClick={handleToggle}
      backgroundColor={backgroundColor1}
      textcolor1={textcolor1}
      backgroundColor2={backgroundColor2}
      textcolor2={textcolor2}
      borderColor={borderColor}
      colorButtonDisplay={colorButtonDisplay}
    >
      <$.DarkLightIcon colorMode={colorMode} />
    </$.Button>
  );
};

export default ColorModeButton;
