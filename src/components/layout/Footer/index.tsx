import useColorMode from 'hooks/useColorMode';
import useHiddenMenu from 'hooks/useHiddenMenu';
import Path from 'models/Path';
import Link from 'next/link';
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
            <Link href={Path.ABOUT}>
              <$.Anchor textColor={textColor}>ABOUT</$.Anchor>
            </Link>
          </$.Menu>
          <$.Menu>
            <$.Anchor textColor={textColor}>STOCKIST</$.Anchor>
          </$.Menu>
          <$.Menu>
            <$.Anchor textColor={textColor}>ORDER</$.Anchor>
          </$.Menu>
          <$.Menu>
            <$.Anchor textColor={textColor}>COSTOMER SERVICE</$.Anchor>
          </$.Menu>
          <$.Menu>
            <Link href={Path.TERMOFUSE}>
              <$.Anchor textColor={textColor}>TERMS OF USE</$.Anchor>
            </Link>
          </$.Menu>
          <$.Menu>
            <$.Anchor textColor={textColor}>INSTAGRAM</$.Anchor>
          </$.Menu>
        </$.Menus>
      </$.MenuContainer>
      <$.Container display={display}>
        <$.ContainerChild>COMPANY : OYS CO.,LTD</$.ContainerChild>
        <$.ContainerChild>REPRESENTATIVE : SYO</$.ContainerChild>
        <$.ContainerChild>REGISTRATION : </$.ContainerChild>
        <$.ContainerChild>EMAIL : CONTACT@OYS-LAB.COM</$.ContainerChild>
      </$.Container>
      <$.Copyright isMobile>© 2023, OYS.</$.Copyright>
    </$.Footer>
  );
};

export default Footer;
