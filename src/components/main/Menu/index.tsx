import ColorModeButton from '../ColorModeButton';
import * as $ from './styles';
import SideMenu from '../SideMenu';
import SideMenus from '../SideMenus';
import useSideMenuMode from 'hooks/useSideMenuMode';

const Menu = () => {
  const { searchButtonDisplay } = useSideMenuMode();
  return (
    <$.Main>
      <$.MenuSec>
        <SideMenus />
        <$.BtnSec>
          <ColorModeButton />
          <$.Button aria-label="search">
            <$.SearchIcon searchButtonDisplay={searchButtonDisplay} />
          </$.Button>
        </$.BtnSec>
        <SideMenu />
      </$.MenuSec>
    </$.Main>
  );
};

export default Menu;
