import { FC } from 'react';
import * as $ from './product.styles';

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
        <$.ProductWrap>
          <$.ProductWrapImageSection>
            <$.ProductImage src={image} />
          </$.ProductWrapImageSection>
          <$.ProductInformation borderColor={borderColor}>
            <$.ProductDescription>
              <strong>{title}</strong>
              <span>{price}</span>
            </$.ProductDescription>
            <$.ProductSoldoutButton
              backgroundColor2={backgroundColor2}
              textcolor2={textcolor2}
            >
              <button>Sold Out</button>
            </$.ProductSoldoutButton>
          </$.ProductInformation>
        </$.ProductWrap>
      </$.Product>
    </>
  );
};

export default Product;
