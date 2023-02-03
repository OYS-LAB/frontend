import ColorModeButton from '../ColorModeButton';
import * as $ from './styles';
import SideMenu from '../SideMenu';
import SideMenus from '../SideMenus';
import useSideMenu from 'hooks/useSideMenu';

const Menu = () => {
  const { searchButtonDisplay } = useSideMenu();
  return (
    <$.Main>
      <$.MenuSection>
        <SideMenus />
        <$.ButtonSection>
          <ColorModeButton />
          {/* 
          <$.Button aria-label="search">
            <$.SearchIcon searchButtonDisplay={searchButtonDisplay} />
          </$.Button>
        */}
        </$.ButtonSection>
        <SideMenu />
      </$.MenuSection>
    </$.Main>
  );
};

export default Menu;
