import { useRecoilValue } from 'recoil';
import { currentState } from 'store/atoms/darkMode';
import * as $ from './Footer.styles';

const Footer = () => {
  const current = useRecoilValue(currentState);
  const backgroundColor = current.backgroundColor;
  const textColor = current.color;
  const borderColor = current.borderColor;

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
    </$.Footer>
  );
};

export default Footer;
