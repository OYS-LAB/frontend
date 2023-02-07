import useColorMode from 'hooks/useColorMode';
import useHiddenMenu from 'hooks/useHiddenMenu';
import * as $ from './styles';

const Footer = () => {
  const {
    borderColor,
    backgroundColor1: backgroundColor,
    textColor1: textColor,
  } = useColorMode();

  const { isVisible: isHiddenMenuVisible, height, display } = useHiddenMenu();

  return (
    <$.Footer
      backgroundColor={backgroundColor}
      textColor={textColor}
      borderColor={borderColor}
      height={height}
      isHiddenMenuVisible={isHiddenMenuVisible}
    >
      <$.Hr borderColor={borderColor} />
      <$.MenuContainer>
        <$.Copyright>© 2023, OYS.</$.Copyright>
        <$.Menus role="navigation">
          <$.Menu>
            <$.Anchor textColor={textColor} href="/">
              ABOUT
            </$.Anchor>
          </$.Menu>
          <$.Menu>
            <$.Anchor textColor={textColor} href="/">
              STOCKIST
            </$.Anchor>
          </$.Menu>
          <$.Menu>
            <$.Anchor textColor={textColor} href="/">
              ORDER
            </$.Anchor>
          </$.Menu>
          <$.Menu>
            <$.Anchor textColor={textColor} href="/">
              COSTOMER SERVICE
            </$.Anchor>
          </$.Menu>
          <$.Menu>
            <$.Anchor textColor={textColor} href="/">
              LEGAL
            </$.Anchor>
          </$.Menu>
          <$.Menu>
            <$.Anchor textColor={textColor} href="/">
              INSTAGRAM
            </$.Anchor>
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
      <$.Copyright isMobile>© 2023, OYS.</$.Copyright>
    </$.Footer>
  );
};

export default Footer;
