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
          <dd>
            <strong>{title}</strong>
            <span>{price}</span>
          </dd>
        </$.Product_wrap>
        <button>솔드아웃</button>
      </$.Product>
    </>
  );
};

export default Product;
