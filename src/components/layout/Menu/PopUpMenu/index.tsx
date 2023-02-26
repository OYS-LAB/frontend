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
    <$.PopupMenu isHiddenMenuVisible={isHiddenMenuVisible}>
      <li>
        <$.PopupMenuAnchor textcolor={textcolor} href="/">
          ALL
        </$.PopupMenuAnchor>
      </li>
      <li>
        <$.PopupMenuAnchor textcolor={textcolor} href="/">
          BEST
        </$.PopupMenuAnchor>
      </li>
      <li>
        <Link href={Path.FURNITURE} onClick={handleToggle}>
          <$.PopupMenuAnchor textcolor={textcolor}>FURNITURE</$.PopupMenuAnchor>
        </Link>
      </li>
      <li>
        <$.PopupMenuAnchor textcolor={textcolor} href="/">
          HOME ACC
        </$.PopupMenuAnchor>
      </li>
      <li>
        <$.PopupMenuAnchor textcolor={textcolor} href="/">
          SCENT
        </$.PopupMenuAnchor>
      </li>
      <li>
        <$.PopupMenuAnchor textcolor={textcolor} href="/">
          ETC.
        </$.PopupMenuAnchor>
      </li>
      <li>
        <$.PopupMenuCloseButton textcolor={textcolor} onClick={handleToggle}>
          <$.PopupMenuCloseImg colorMode={colorMode} aria-label="close" />
        </$.PopupMenuCloseButton>
      </li>
    </$.PopupMenu>
  );
};

export default ShopMenu;
