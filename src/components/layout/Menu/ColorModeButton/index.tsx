import useColorMode from 'hooks/useColorMode';
import useHiddenMenu from 'hooks/useHiddenMenu';
import * as $ from './styles';

const ColorModeButton = () => {
  const { handleToggle } = useColorMode();
  const { colorButtonDisplay } = useHiddenMenu();
  const { colorMode } = useColorMode();

  return (
    <$.ColorModeButton
      aria-label="dark-light"
      onClick={handleToggle}
      colorButtonDisplay={colorButtonDisplay}
    >
      <$.DarkLightIcon colorMode={colorMode} />
    </$.ColorModeButton>
  );
};

export default ColorModeButton;
