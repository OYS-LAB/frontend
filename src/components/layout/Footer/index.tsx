import useColorMode from 'hooks/useColorMode';
import useSideMenu from 'hooks/useSideMenu';
import * as $ from './styles';

const Footer = () => {
  const {
    borderColor,
    backgroundColor1: backgroundColor,
    textColor1: textColor,
  } = useColorMode();

  const { isVisible: isSideMenuVisible, height, display } = useSideMenu();

  return (
    <$.Footer
      backgroundColor={backgroundColor}
      textColor={textColor}
      borderColor={borderColor}
      height={height}
      isSideMenuVisible={isSideMenuVisible}
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
      <$.Container display={display}>
        <$.ContainerChild>COMPANY : OYS CO.,LTD</$.ContainerChild>
        <$.ContainerChild>OWNER : KIM OK HEE</$.ContainerChild>
        <$.ContainerChild>REGISTRATION : </$.ContainerChild>
        <$.ContainerChild>MAIL ORDER LICENSE : </$.ContainerChild>
        <$.ContainerChild>EMAIL : CONTACT@OYS-LAB.COM</$.ContainerChild>
      </$.Container>
    </$.Footer>
  );
};

export default Footer;
