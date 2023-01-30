import * as $ from './Footer.styles';
import Link from 'next/link';

const Footer = () => {
  return (
    <$.Footer>
      <$.Menus role="navigation">
        <$.Menu>2023 뭐시기</$.Menu>
        <$.Menu>
          <Link href="/">ABOUT</Link>
        </$.Menu>
        <$.Menu>
          <Link href="/">STOCKIST</Link>
        </$.Menu>
        <$.Menu>
          <Link href="/">ORDER</Link>
        </$.Menu>
        <$.Menu>
          <Link href="/">COSTOMER SERVICE</Link>
        </$.Menu>
        <$.Menu>
          <Link href="/">LEGAL</Link>
        </$.Menu>
        <$.Menu>
          <Link href="/">INSTAGRAM</Link>
        </$.Menu>
      </$.Menus>
    </$.Footer>
  );
};

export default Footer;
