import ColorModeButton from './ColorModeButton';
import useColorMode from 'hooks/useColorMode';
import * as $ from './Menu.styles';

const Menu = () => {
  const { textColor1: textColor } = useColorMode();
  return (
    <$.Main>
      <$.MenuSec>
        <$.Menus>
          <$.Menu>
            <$.SLink textColor={textColor} href="/">
              SHOP
            </$.SLink>
          </$.Menu>
          <$.Menu>
            <$.SLink textColor={textColor} href="/">
              ARCHIVE
            </$.SLink>
          </$.Menu>
        </$.Menus>
        <$.btnSec>
          <ColorModeButton />
          <$.Button aria-label="search">
            <$.SearchIcon />
          </$.Button>
        </$.btnSec>
      </$.MenuSec>
    </$.Main>
  );
};

export default Menu;
