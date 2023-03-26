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
  const { baseColor, reverseColor } = useColorMode();

  return (
    <>
      <$.Product reverseColor={reverseColor}>
        <$.ProductWrap>
          <$.ProductWrapImageSection>
            <$.ProductImage src={image} alt="OYS-LAB product image" />
          </$.ProductWrapImageSection>
          <$.ProductInformation reverseColor={reverseColor}>
            <$.ProductDescription>
              <strong>{title}</strong>
              <span>{price}</span>
            </$.ProductDescription>
            <$.ProductSoldoutButton
              baseColor={baseColor}
              reverseColor={reverseColor}
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
