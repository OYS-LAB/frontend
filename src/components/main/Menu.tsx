import DarkMode from 'components/layout/UI/DarkMode';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  currentState,
  DarkState,
  LightState,
} from '../../store/atoms/darkMode';
import * as $ from './Menu.styles';

const Menu = () => {
  const current = useRecoilValue(currentState);
  const textColor = current.color;
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
          <DarkMode />
          <$.Button aria-label="search">
            <$.SearchIcon />
          </$.Button>
        </$.btnSec>
      </$.MenuSec>
    </$.Main>
  );
};

export default Menu;
