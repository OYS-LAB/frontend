import useSideMenu from 'hooks/useSideMenu';
import useColorMode from 'hooks/useColorMode';
import * as $ from './styles';

const SideMenus = () => {
  const { handleToggle, height, display, contentDisplay } = useSideMenu();
  const { textColor1: textColor } = useColorMode();

  return (
    <$.SideMenus>
      <$.List height={height} display={display} contentDisplay={contentDisplay}>
        <li onClick={handleToggle}>SHOP</li>
        <li>
          <$.SLink textColor={textColor} href="/">
            ARCHIVE
          </$.SLink>
        </li>
      </$.List>
    </$.SideMenus>
  );
};

export default SideMenus;
