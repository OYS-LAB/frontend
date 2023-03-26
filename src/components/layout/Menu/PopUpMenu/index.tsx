import Link from 'next/link';
import useColorMode from 'hooks/useColorMode';
import useHiddenMenu from 'hooks/useHiddenMenu';
import * as $ from './styles';
import Path from 'models/Path';
const ShopMenu = () => {
  const { isVisible: isHiddenMenuVisible, handleToggle } = useHiddenMenu();
  const { reverseColor, colorMode } = useColorMode();

  return (
    <$.PopupMenu isHiddenMenuVisible={isHiddenMenuVisible}>
      <li>
        <Link href={Path.ALL} onClick={handleToggle}>
          <$.PopupMenuAnchor reverseColor={reverseColor}>ALL</$.PopupMenuAnchor>
        </Link>
      </li>
      <li>
        <Link href={Path.FURNITURE} onClick={handleToggle}>
          <$.PopupMenuAnchor reverseColor={reverseColor}>
            FURNITURE
          </$.PopupMenuAnchor>
        </Link>
      </li>
      <li>
        <Link href={Path.HOMEOBJECT} onClick={handleToggle}>
          <$.PopupMenuAnchor reverseColor={reverseColor}>
            HOME OBJECT
          </$.PopupMenuAnchor>
        </Link>
      </li>
      <li>
        <Link href={Path.ETC} onClick={handleToggle}>
          <$.PopupMenuAnchor reverseColor={reverseColor}>
            ETC.
          </$.PopupMenuAnchor>
        </Link>
      </li>
      <li>
        <$.PopupMenuCloseButton
          reverseColor={reverseColor}
          onClick={handleToggle}
        >
          <$.PopupMenuCloseImg colorMode={colorMode} aria-label="close" />
        </$.PopupMenuCloseButton>
      </li>
    </$.PopupMenu>
  );
};

export default ShopMenu;
