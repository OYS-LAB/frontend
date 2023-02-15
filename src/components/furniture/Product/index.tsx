import { FC } from 'react';
import * as $ from './product.styles';
import dummyImage from 'images/img-dummy.jpg';

interface ProductProps {
  image: string;
  title: string;
  price: string;
}

const Product: FC<ProductProps> = props => {
  const { image, title, price } = props;

  return (
    <>
      <$.Product>
        <$.Product_wrap>
          <$.Product_wrap_image>
            <$.Product_image src={dummyImage.src} />
          </$.Product_wrap_image>
          <$.Product_footer>
            <$.Product_description>
              <strong>{title}</strong>
              <span>{price}</span>
            </$.Product_description>
            <$.Product_soldOut_wrap>
              <button>Sold Out</button>
            </$.Product_soldOut_wrap>
          </$.Product_footer>
        </$.Product_wrap>
      </$.Product>
    </>
  );
};

export default Product;
