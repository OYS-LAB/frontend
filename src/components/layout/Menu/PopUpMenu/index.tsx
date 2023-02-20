import Link from 'next/link';
import useColorMode from 'hooks/useColorMode';
import useHiddenMenu from 'hooks/useHiddenMenu';
import * as $ from './styles';
import Path from 'models/Path';
const ShopMenu = () => {
  const { isVisible: isHiddenMenuVisible, handleToggle } = useHiddenMenu();
  const { textColor1: textColor } = useColorMode();
  const { colorMode } = useColorMode();

  return (
    <$.PopupMenus isHiddenMenuVisible={isHiddenMenuVisible}>
      <$.Menu>
        <$.Anchor textColor={textColor} href="/">
          ALL
        </$.Anchor>
      </$.Menu>
      <$.Menu>
        <$.Anchor textColor={textColor} href="/">
          BEST
        </$.Anchor>
      </$.Menu>
      <$.Menu>
        <Link href={Path.FURNITURE} onClick={handleToggle}>
          <$.Anchor textColor={textColor}>FURNITURE</$.Anchor>
        </Link>
      </$.Menu>
      <$.Menu>
        <$.Anchor textColor={textColor} href="/">
          HOME ACC
        </$.Anchor>
      </$.Menu>
      <$.Menu>
        <$.Anchor textColor={textColor} href="/">
          SCENT
        </$.Anchor>
      </$.Menu>
      <$.Menu>
        <$.Anchor textColor={textColor} href="/">
          ETC.
        </$.Anchor>
      </$.Menu>
      <$.Menu>
        <$.CloseButton textColor={textColor} onClick={handleToggle}>
          <$.Img colorMode={colorMode} aria-label="close" />
        </$.CloseButton>
      </$.Menu>
    </$.PopupMenus>
  );
};

export default ShopMenu;
