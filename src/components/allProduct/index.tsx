import useColorMode from 'hooks/useColorMode';
import useHiddenMenu from 'hooks/useHiddenMenu';
import * as $ from './styles';
import Product from 'components/furniture/Product';
import product_1 from 'images/img-product_1.jpg';
import product_2 from 'images/img-product_2.jpg';
import product_3 from 'images/img-product_3.jpg';

const MOCK_PRODUCTS = [
  {
    id: 0,
    image: product_1.src,
    title: 'Half Moon Table',
    price: 'KRW 1,800,000',
  },
  {
    id: 1,
    image: product_2.src,
    title: 'Lean Shelf System',
    price: 'KRW 450,000',
  },
  {
    id: 2,
    image: product_3.src,
    title: 'Side Table 4 Piece',
    price: 'Not For Sale',
  },
];

const AllProduct = () => {
  const { contentDisplay } = useHiddenMenu();
  const { reverseColor } = useColorMode();
  const isVisible = contentDisplay === 'block';
  return isVisible ? (
    <$.AllProductSection>
      <$.AllProductSectionHeader>ALL</$.AllProductSectionHeader>
      <$.AllProductSectionHr reverseColor={reverseColor} />
      <$.AllProductsWrap>
        <$.AllProducts>
          {MOCK_PRODUCTS.map(({ id, image, title, price }) => (
            <Product key={id} image={image} title={title} price={price} />
          ))}
        </$.AllProducts>
      </$.AllProductsWrap>
    </$.AllProductSection>
  ) : null;
};

export default AllProduct;
