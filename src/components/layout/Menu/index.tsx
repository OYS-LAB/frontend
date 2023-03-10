import ColorModeButton from './ColorModeButton';
import * as $ from './styles';
import useHiddenMenu from 'hooks/useHiddenMenu';
import MainMenu from './MainMenu';
import PopUpMenu from './PopUpMenu';
import useColorMode from 'hooks/useColorMode';
import Link from 'next/link';
import Path from 'models/Path';

const Menu = () => {
  const {
    isVisible: isVisiblePopUpMenu,
    searchButtonDisplay,
    closeToggle,
  } = useHiddenMenu();
  const { colorMode } = useColorMode();

  return (
    <$.MenuWrap isVisiblePopUpMenu={isVisiblePopUpMenu}>
      <$.MenuHeader>
        <$.MenuLogo>
          <Link href={Path.MAIN} onClick={closeToggle}>
            <$.MenuImg colorMode={colorMode} aria-label="OYS-LAB" />
          </Link>
        </$.MenuLogo>
      </$.MenuHeader>
      <$.MenuSection>
        <MainMenu />
        <ColorModeButton />
        {/* 
          1차 오픈 이후 개발 예정
          <$.Button aria-label="search">
            <$.SearchIcon searchButtonDisplay={searchButtonDisplay} />
          </$.Button>
        */}
        {isVisiblePopUpMenu && <PopUpMenu />}
      </$.MenuSection>
    </$.MenuWrap>
  );
};

export default Menu;
