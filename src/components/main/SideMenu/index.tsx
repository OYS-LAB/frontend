import useColorMode from 'hooks/useColorMode';
import useSideMenu from 'hooks/useSideMenu';
import * as $ from './styles';
const SideMenu = () => {
  const { isVisible: isSideMenuVisible, handleToggle } = useSideMenu();
  const { textColor1: textColor } = useColorMode();
  return (
    <$.Menus isSideMenuVisible={isSideMenuVisible}>
      <$.Menu>
        <$.SLink textColor={textColor} href="/">
          ALL
        </$.SLink>
      </$.Menu>
      <$.Menu>
        <$.SLink textColor={textColor} href="/">
          BEST
        </$.SLink>
      </$.Menu>
      <$.Menu>
        <$.SLink textColor={textColor} href="/">
          FURNITURE
        </$.SLink>
      </$.Menu>
      <$.Menu>
        <$.SLink textColor={textColor} href="/">
          HOME ACC
        </$.SLink>
      </$.Menu>
      <$.Menu>
        <$.SLink textColor={textColor} href="/">
          SCENT
        </$.SLink>
      </$.Menu>
      <$.Menu>
        <$.SLink textColor={textColor} href="/">
          ETC.
        </$.SLink>
      </$.Menu>
      <$.Menu>
        <$.CloseButton textColor={textColor} onClick={handleToggle}>
          X
        </$.CloseButton>
      </$.Menu>
    </$.Menus>
  );
};

export default SideMenu;
