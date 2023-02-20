import useColorMode from 'hooks/useColorMode';
import useHiddenMenu from 'hooks/useHiddenMenu';
import * as $ from './styles';

const Cart = () => {
  const { backgroundColor2, textcolor2 } = useColorMode();
  const { isVisible: isHiddenMenuVisible } = useHiddenMenu();

  return (
    <$.Wrapper
      backgroundColor2={backgroundColor2}
      isHiddenMenuVisible={isHiddenMenuVisible}
    >
      <$.Menus textcolor2={textcolor2}>
        <$.Menu>(KR/USD)</$.Menu>
        <$.Menu>ACCOUNT</$.Menu>
        <$.Menu>BAG:0</$.Menu>
      </$.Menus>
    </$.Wrapper>
  );
};

export default Cart;
