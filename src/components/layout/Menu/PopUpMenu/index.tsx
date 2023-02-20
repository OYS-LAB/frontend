import Link from 'next/link';
import useColorMode from 'hooks/useColorMode';
import useHiddenMenu from 'hooks/useHiddenMenu';
import * as $ from './styles';
import Path from 'models/Path';
const ShopMenu = () => {
  const { isVisible: isHiddenMenuVisible, handleToggle } = useHiddenMenu();
  const { textcolor1: textcolor } = useColorMode();
  const { colorMode } = useColorMode();

  return (
    <$.PopupMenus isHiddenMenuVisible={isHiddenMenuVisible}>
      <$.Menu>
        <$.Anchor textcolor={textcolor} href="/">
          ALL
        </$.Anchor>
      </$.Menu>
      <$.Menu>
        <$.Anchor textcolor={textcolor} href="/">
          BEST
        </$.Anchor>
      </$.Menu>
      <$.Menu>
        <Link href={Path.FURNITURE} onClick={handleToggle}>
          <$.Anchor textcolor={textcolor}>FURNITURE</$.Anchor>
        </Link>
      </$.Menu>
      <$.Menu>
        <$.Anchor textcolor={textcolor} href="/">
          HOME ACC
        </$.Anchor>
      </$.Menu>
      <$.Menu>
        <$.Anchor textcolor={textcolor} href="/">
          SCENT
        </$.Anchor>
      </$.Menu>
      <$.Menu>
        <$.Anchor textcolor={textcolor} href="/">
          ETC.
        </$.Anchor>
      </$.Menu>
      <$.Menu>
        <$.CloseButton textcolor={textcolor} onClick={handleToggle}>
          <$.Img colorMode={colorMode} aria-label="close" />
        </$.CloseButton>
      </$.Menu>
    </$.PopupMenus>
  );
};

export default ShopMenu;
