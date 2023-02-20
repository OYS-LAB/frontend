import { FC } from 'react';
import * as $ from './product.styles';
import dummyImage from 'images/img-dummy.jpg';
import useColorMode from 'hooks/useColorMode';

interface ProductProps {
  image: string;
  title: string;
  price: string;
}

const Product: FC<ProductProps> = props => {
  const { image, title, price } = props;
  const {
    borderColor,
    backgroundColor2: backgroundColor2,
    textcolor2: textcolor2,
  } = useColorMode();

  return (
    <>
      <$.Product borderColor={borderColor}>
        <$.Product_wrap>
          <$.Product_wrap_image>
            <$.Product_image src={dummyImage.src} />
          </$.Product_wrap_image>
          <$.Product_footer borderColor={borderColor}>
            <$.Product_description>
              <strong>{title}</strong>
              <span>{price}</span>
            </$.Product_description>
            <$.Product_soldOut_wrap
              backgroundColor2={backgroundColor2}
              textcolor2={textcolor2}
            >
              <button>Sold Out</button>
            </$.Product_soldOut_wrap>
          </$.Product_footer>
        </$.Product_wrap>
      </$.Product>
    </>
  );
};

export default Product;
