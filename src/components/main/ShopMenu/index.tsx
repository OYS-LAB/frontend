import useHiddenMenu from 'hooks/useHiddenMenu';
import useColorMode from 'hooks/useColorMode';
import * as $ from './styles';

const HiddenMenu = () => {
  const { handleToggle, height, display, contentDisplay } = useHiddenMenu();
  const { textColor1: textColor } = useColorMode();

  return (
    <$.ShopMenu>
      <$.List height={height} display={display} contentDisplay={contentDisplay}>
        <li onClick={handleToggle}>SHOP</li>
        <li>
          <$.Anchor textColor={textColor} href="/">
            ARCHIVE
          </$.Anchor>
        </li>
      </$.List>
    </$.ShopMenu>
  );
};

export default HiddenMenu;
