import * as $ from './Menu.styles';

const Menu = () => {
  return (
    <$.Main>
      <$.MenuSec>
        <$.Menus>
          <$.Menu>
            <$.SLink href="/">SHOP</$.SLink>
          </$.Menu>
          <$.Menu>
            <$.SLink href="/">ARCHIVE</$.SLink>
          </$.Menu>
        </$.Menus>
        <$.btnSec>
          <$.Button aria-label="dark-light">
            <$.DarkLightIcon />
          </$.Button>
          <$.Button aria-label="search">
            <$.SearchIcon />
          </$.Button>
        </$.btnSec>
      </$.MenuSec>
    </$.Main>
  );
};

export default Menu;
