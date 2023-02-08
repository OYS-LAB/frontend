import ColorModeButton from '../ColorModeButton';
import * as $ from './styles';
import useHiddenMenu from 'hooks/useHiddenMenu';
import ShopMenu from '../ShopMenu';
import PopUpMenu from 'components/main/PopUpMenu';

const Menu = () => {
  const { isVisible: isHiddenMenuVisible, searchButtonDisplay } =
    useHiddenMenu();
  return (
    <$.Main>
      <$.MenuSection>
        <ShopMenu />
        <$.ButtonSection>
          <ColorModeButton />
          {/* 
          <$.Button aria-label="search">
            <$.SearchIcon searchButtonDisplay={searchButtonDisplay} />
          </$.Button>
        */}
        </$.ButtonSection>
        {isHiddenMenuVisible ? <PopUpMenu /> : null}
        {/* <PopUpMenu /> */}
      </$.MenuSection>
    </$.Main>
  );
};

export default Menu;
