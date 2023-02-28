import useColorMode from 'hooks/useColorMode';
import useHiddenMenu from 'hooks/useHiddenMenu';
import Path from 'models/Path';
import Link from 'next/link';
import * as $ from './styles';

const MainMenu = () => {
  const { handleToggle, height, display, contentDisplay } = useHiddenMenu();
  const { reverseColor } = useColorMode();

  return (
    <$.MainMenuWrap>
      <$.MainMenu
        height={height}
        display={display}
        contentDisplay={contentDisplay}
      >
        <li onClick={handleToggle}>SHOP</li>
        <li onClick={handleToggle}>
          <Link href={Path.ABOUT}>
            <$.MainMenuAnchor color={reverseColor}>ABOUT</$.MainMenuAnchor>
          </Link>
        </li>
      </$.MainMenu>
    </$.MainMenuWrap>
  );
};

export default MainMenu;
