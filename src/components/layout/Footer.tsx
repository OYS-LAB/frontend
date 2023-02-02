import useColorMode from 'hooks/useColorMode';
import * as $ from './Footer.styles';

const Footer = () => {
  const {
    borderColor,
    backgroundColor1: backgroundColor,
    textColor1: textColor,
  } = useColorMode();

  return (
    <$.Footer
      backgroundColor={backgroundColor}
      textColor={textColor}
      borderColor={borderColor}
    >
      <$.MenuContainer>
        <$.Copyright>© 2023, OYS.</$.Copyright>
        <$.Menus role="navigation">
          <$.Menu>
            <$.SLink textColor={textColor} href="/">
              ABOUT
            </$.SLink>
          </$.Menu>
          <$.Menu>
            <$.SLink textColor={textColor} href="/">
              STOCKIST
            </$.SLink>
          </$.Menu>
          <$.Menu>
            <$.SLink textColor={textColor} href="/">
              ORDER
            </$.SLink>
          </$.Menu>
          <$.Menu>
            <$.SLink textColor={textColor} href="/">
              COSTOMER SERVICE
            </$.SLink>
          </$.Menu>
          <$.Menu>
            <$.SLink textColor={textColor} href="/">
              LEGAL
            </$.SLink>
          </$.Menu>
          <$.Menu>
            <$.SLink textColor={textColor} href="/">
              INSTAGRAM
            </$.SLink>
          </$.Menu>
        </$.Menus>
      </$.MenuContainer>
      <$.Container>
        이게진짜 푸터
        <br />
        이게진짜 푸터
        <br />
        이게진짜 푸터
        <br />
        이게진짜 푸터
        <br />
      </$.Container>
    </$.Footer>
  );
};

export default Footer;
