import useColorMode from 'hooks/useColorMode';
import useHiddenMenu from 'hooks/useHiddenMenu';
import * as $ from './styles';

const Cart = () => {
  const { backgroundColor2, textcolor2 } = useColorMode();
  const { isVisible: isHiddenMenuVisible } = useHiddenMenu();

  return (
    <$.CartWrapper
      backgroundColor2={backgroundColor2}
      isHiddenMenuVisible={isHiddenMenuVisible}
    >
      <$.CartMenu textcolor2={textcolor2}>
        <li>(KR/USD)</li>
        <li>ACCOUNT</li>
        <li>BAG:0</li>
      </$.CartMenu>
    </$.CartWrapper>
  );
};

export default Cart;
