import ColorModeButton from './ColorModeButton';
import * as $ from './styles';
import useHiddenMenu from 'hooks/useHiddenMenu';
import ShopMenu from './ShopMenu';
import PopUpMenu from './PopUpMenu';
import useColorMode from 'hooks/useColorMode';
import Link from 'next/link';
import Path from 'models/Path';

const Menu = () => {
  const {
    isVisible: isHiddenMenuVisible,
    searchButtonDisplay,
    closeToggle,
  } = useHiddenMenu();
  const { colorMode } = useColorMode();

  return (
    <$.LayoutSection>
      <$.MainHeader>
        <$.Logo>
          <Link href={Path.MAIN} onClick={closeToggle}>
            <$.Img colorMode={colorMode} aria-label="OYS-LAB" />
          </Link>
        </$.Logo>
      </$.MainHeader>
      <$.MenuSection>
        <ShopMenu />
        <$.ButtonSection>
          <ColorModeButton />
          {/* 
          1차 오픈 이후 개발 예정
          <$.Button aria-label="search">
            <$.SearchIcon searchButtonDisplay={searchButtonDisplay} />
          </$.Button>
        */}
        </$.ButtonSection>
        {isHiddenMenuVisible && <PopUpMenu />}
        {/* <PopUpMenu /> */}
      </$.MenuSection>
    </$.LayoutSection>
  );
};

export default Menu;
