import useHiddenMenu from 'hooks/useHiddenMenu';
import * as $ from './Furniture.styles';
import Product from './Product';

const MOCK_PRODUCTS = [
  {
    id: 0,
    image: '',
    title: '상품명1',
    price: '120만원',
  },
  {
    id: 1,
    image: '',
    title: '상품명2',
    price: '120만원',
  },
  {
    id: 2,
    image: '',
    title: '상품명3',
    price: '120만원',
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
  const isVisible = contentDisplay === 'block';

  return isVisible ? (
    <$.Wrap>
      <$.Header>FURNITURE</$.Header>
      <$.Hr />
      <$.Ul>
        {MOCK_PRODUCTS.map(({ id, image, title, price }) => (
          <Product key={id} image={image} title={title} price={price} />
        ))}
      </$.Ul>
    </$.Wrap>
  ) : null;
};

export default Furniture;
