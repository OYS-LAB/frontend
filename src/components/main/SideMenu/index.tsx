import useColorMode from 'hooks/useColorMode';
import useSideMenuMode from 'hooks/useSideMenuMode';
import * as $ from './styles';
const SideMenu = () => {
  const { sideMenuDisplay, closeToggle } = useSideMenuMode();
  const { textColor1: textColor } = useColorMode();
  return (
    <$.Menus sideMenuDisplay={sideMenuDisplay}>
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
      <div>
        <$.CloseButton textColor={textColor} onClick={closeToggle}>
          X
        </$.CloseButton>
      </div>
    </$.Menus>
  );
};

export default SideMenu;
