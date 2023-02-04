import useHiddenMenu from 'hooks/useHiddenMenu';
import useColorMode from 'hooks/useColorMode';
import * as $ from './styles';

const HiddenMenu = () => {
  const { handleToggle, height, display, contentDisplay } = useHiddenMenu();
  const { textColor1: textColor } = useColorMode();

  return (
    <$.ShopMenu>
      <$.Lists
        height={height}
        display={display}
        contentDisplay={contentDisplay}
      >
        <$.List onClick={handleToggle}>SHOP</$.List>
        <$.List>
          <$.Anchor textColor={textColor} href="/">
            ARCHIVE
          </$.Anchor>
        </$.List>
      </$.Lists>
    </$.ShopMenu>
  );
};

export default HiddenMenu;
