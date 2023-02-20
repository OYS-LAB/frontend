import useHiddenMenu from 'hooks/useHiddenMenu';
import useColorMode from 'hooks/useColorMode';
import * as $ from './styles';

const MainMenu = () => {
  const { handleToggle, height, display, contentDisplay } = useHiddenMenu();

  return (
    <$.MainMenu>
      <$.Menus
        height={height}
        display={display}
        contentDisplay={contentDisplay}
      >
        <$.Menu onClick={handleToggle}>SHOP</$.Menu>
        <$.Menu>
          <$.Anchor>ARCHIVE</$.Anchor>
        </$.Menu>
      </$.Menus>
    </$.MainMenu>
  );
};

export default MainMenu;
