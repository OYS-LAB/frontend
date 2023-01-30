import * as $ from './Footer.styles';

const Footer = () => {
  return (
    <$.Footer>
      <$.Menus role="navigation">
        <$.Copyright>© 2023, OYS.</$.Copyright>
        <$.Menu>
          <$.SLink href="/">ABOUT</$.SLink>
        </$.Menu>
        <$.Menu>
          <$.SLink href="/">STOCKIST</$.SLink>
        </$.Menu>
        <$.Menu>
          <$.SLink href="/">ORDER</$.SLink>
        </$.Menu>
        <$.Menu>
          <$.SLink href="/">COSTOMER SERVICE</$.SLink>
        </$.Menu>
        <$.Menu>
          <$.SLink href="/">LEGAL</$.SLink>
        </$.Menu>
        <$.Menu>
          <$.SLink href="/">INSTAGRAM</$.SLink>
        </$.Menu>
      </$.Menus>
    </$.Footer>
  );
};

export default Footer;
