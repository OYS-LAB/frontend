import { FC } from 'react';


interface ProductProps {
    image: string;
    title: string;
    price: string;
  }
  

const Product: FC<ProductProps> = (props) => {
    const { image, title, price} = props;

  return (
    <>
        <li>
          <img />
          <dl>
            <dt>
              <strong>{title}</strong>
            </dt>
            <dd>
              <span>{price}</span>
            </dd>
          </dl>
          <button>솔드아웃</button>
        </li>
    </>
    );
};

export default Product;
