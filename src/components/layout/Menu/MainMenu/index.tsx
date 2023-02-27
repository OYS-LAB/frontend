import useHiddenMenu from 'hooks/useHiddenMenu';
import * as $ from './styles';

const MainMenu = () => {
  const { handleToggle, height, display, contentDisplay } = useHiddenMenu();

  return (
    <$.MainMenuWrap>
      <$.MainMenu
        height={height}
        display={display}
        contentDisplay={contentDisplay}
      >
        <li onClick={handleToggle}>SHOP</li>
        <li>
          <$.MainMenuAnchor>ARCHIVE</$.MainMenuAnchor>
        </li>
      </$.MainMenu>
    </$.MainMenuWrap>
  );
};

export default MainMenu;
