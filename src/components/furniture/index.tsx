import useColorMode from 'hooks/useColorMode';
import useHiddenMenu from 'hooks/useHiddenMenu';
import * as $ from './Furniture.styles';
import Product from './Product';

const MOCK_PRODUCTS = [
  {
    id: 0,
    image: '',
    title: 'Half Moon Table',
    price: 'KRW 1,800,000',
  },
  {
    id: 1,
    image: '',
    title: 'Lean Shelf System',
    price: 'KRW 450,000',
  },
  {
    id: 2,
    image: '',
    title: 'Side Table 4 Piece',
    price: 'Not For Sale',
  },
  {
    id: 3,
    image: '',
    title: '상품명4',
    price: '120만원',
  },
];

const Furniture = () => {
  const { contentDisplay } = useHiddenMenu();
  const { borderColor } = useColorMode();
  const isVisible = contentDisplay === 'block';

  return isVisible ? (
    <$.Wrap>
      <$.Header>FURNITURE</$.Header>
      <$.Hr borderColor={borderColor} />
      <$.ProductsWrap>
        <$.Products>
          {MOCK_PRODUCTS.map(({ id, image, title, price }) => (
            <Product key={id} image={image} title={title} price={price} />
          ))}
        </$.Products>
      </$.ProductsWrap>
    </$.Wrap>
  ) : null;
};

export default Furniture;
