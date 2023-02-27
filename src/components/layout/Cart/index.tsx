import useColorMode from 'hooks/useColorMode';
import useHiddenMenu from 'hooks/useHiddenMenu';
import * as $ from './styles';

const Cart = () => {
  const { baseColor, reverseColor } = useColorMode();
  const { isVisible: isHiddenMenuVisible } = useHiddenMenu();

  return (
    <$.CartWrapper
      reverseColor={reverseColor}
      isHiddenMenuVisible={isHiddenMenuVisible}
    >
      <$.CartMenu baseColor={baseColor}>
        <li>(KR/USD)</li>
        <li>ACCOUNT</li>
        <li>BAG:0</li>
      </$.CartMenu>
    </$.CartWrapper>
  );
};

export default Cart;
