import ColorModeButton from './ColorModeButton';
import * as $ from './styles';
import useHiddenMenu from 'hooks/useHiddenMenu';
import ShopMenu from './ShopMenu';
import PopUpMenu from './PopUpMenu';
import useColorMode from 'hooks/useColorMode';

const Menu = () => {
  const { isVisible: isHiddenMenuVisible, searchButtonDisplay } =
    useHiddenMenu();
  const { colorMode } = useColorMode();

  return (
    <$.Main>
      <$.MainHeader>
        <$.Logo>
          <$.Img colorMode={colorMode} aria-label="OYS-LAB" />
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
    </$.Main>
  );
};

export default Menu;
