import useSideMenuMode from 'hooks/useSideMenuMode';
import useColorMode from 'hooks/useColorMode';

import * as $ from './styles';

const SideMenus = () => {
  const { handleToggle, height, display, contentDisplay } = useSideMenuMode();
  const { textColor1: textColor } = useColorMode();
  return (
    <$.SideMenus>
      <$.List
        onClick={handleToggle}
        height={height}
        display={display}
        contentDisplay={contentDisplay}
      >
        SHOP
      </$.List>
      <$.SLink textColor={textColor} href="/">
        ARCHIVE
      </$.SLink>
    </$.SideMenus>
  );
};

export default SideMenus;
