import ColorModeButton from '../ColorModeButton';
import * as $ from './styles';
import useHiddenMenu from 'hooks/useHiddenMenu';
import ShopMenu from '../ShopMenu';
import HiddenMenu from '../HiddenMenu';

const Menu = () => {
  const { searchButtonDisplay } = useHiddenMenu();
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
        <HiddenMenu />
      </$.MenuSection>
    </$.Main>
  );
};

export default Menu;
