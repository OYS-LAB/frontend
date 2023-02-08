import useHiddenMenu from 'hooks/useHiddenMenu';
import useColorMode from 'hooks/useColorMode';
import * as $ from './styles';

const HiddenMenu = () => {
  const { handleToggle, height, display, contentDisplay } = useHiddenMenu();
  const { textColor1: textColor } = useColorMode();

  return (
    <$.ShopMenu>
      <$.Menus
        height={height}
        display={display}
        contentDisplay={contentDisplay}
      >
        <$.Menu onClick={handleToggle}>SHOP</$.Menu>
        <$.Menu>
          <$.Anchor textColor={textColor} href="/">
            ARCHIVE
          </$.Anchor>
        </$.Menu>
      </$.Menus>
    </$.ShopMenu>
  );
};

export default HiddenMenu;
