import Link from 'next/link';
import useColorMode from 'hooks/useColorMode';
import useHiddenMenu from 'hooks/useHiddenMenu';
import * as $ from './styles';
import Path from 'models/Path';
const ShopMenu = () => {
  const { isVisible: isHiddenMenuVisible, handleToggle } = useHiddenMenu();
  const { reverseColor } = useColorMode();
  const { colorMode } = useColorMode();

  return (
    <$.PopupMenu isHiddenMenuVisible={isHiddenMenuVisible}>
      <li>
        <$.PopupMenuAnchor reverseColor={reverseColor}>O</$.PopupMenuAnchor>
      </li>

      <li>
        <$.PopupMenuAnchor reverseColor={reverseColor}>Y</$.PopupMenuAnchor>
      </li>
      {/* 
      <li>
        <Link href={Path.FURNITURE} onClick={handleToggle}>
          <$.PopupMenuAnchor reverseColor={reverseColor}>
            FURNITURE
          </$.PopupMenuAnchor>
        </Link>
      </li>
       */}
      <li>
        <$.PopupMenuAnchor reverseColor={reverseColor}>S</$.PopupMenuAnchor>
      </li>

      <li>
        <$.PopupMenuAnchor reverseColor={reverseColor}>-</$.PopupMenuAnchor>
      </li>

      <li>
        <$.PopupMenuAnchor reverseColor={reverseColor}>LAB</$.PopupMenuAnchor>
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
