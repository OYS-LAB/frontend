import useColorMode from 'hooks/useColorMode';
import useHiddenMenu from 'hooks/useHiddenMenu';
import Path from 'models/Path';
import Link from 'next/link';
import * as $ from './styles';

const Footer = () => {
  const {
    borderColor,
    backgroundColor1: backgroundColor,
    textcolor1: textcolor,
  } = useColorMode();

  const {
    closeToggle,
    isVisible: isHiddenMenuVisible,
    height,
    display,
  } = useHiddenMenu();

  return (
    <$.Footer
      backgroundColor={backgroundColor}
      textcolor={textcolor}
      borderColor={borderColor}
      height={height}
      isHiddenMenuVisible={isHiddenMenuVisible}
    >
      <$.Hr borderColor={borderColor} />
      <$.MenuContainer>
        <$.Copyright textcolor={textcolor}>© 2023, OYS.</$.Copyright>
        <$.Menus role="navigation">
          <$.Menu>
            <Link href={Path.ABOUT} onClick={closeToggle}>
              <$.Anchor textcolor={textcolor}>ABOUT</$.Anchor>
            </Link>
          </$.Menu>
          <$.Menu>
            <$.Anchor textcolor={textcolor}>STOCKIST</$.Anchor>
          </$.Menu>
          <$.Menu>
            <$.Anchor textcolor={textcolor}>ORDER</$.Anchor>
          </$.Menu>
          <$.Menu>
            <$.Anchor textcolor={textcolor}>COSTOMER SERVICE</$.Anchor>
          </$.Menu>
          <$.Menu>
            <Link href={Path.TERMOFUSE}>
              <$.Anchor textcolor={textcolor}>TERMS OF USE</$.Anchor>
            </Link>
          </$.Menu>
          <$.Menu>
            <$.Anchor textcolor={textcolor}>INSTAGRAM</$.Anchor>
          </$.Menu>
        </$.Menus>
      </$.MenuContainer>
      <$.Container display={display}>
        <$.ContainerChild>COMPANY : OYS CO.,LTD</$.ContainerChild>
        <$.ContainerChild>REPRESENTATIVE : SYO</$.ContainerChild>
        <$.ContainerChild>REGISTRATION : </$.ContainerChild>
        <$.ContainerChild>EMAIL : CONTACT@OYS-LAB.COM</$.ContainerChild>
      </$.Container>
      <$.Copyright isMobile textcolor={textcolor}>
        © 2023, OYS.
      </$.Copyright>
    </$.Footer>
  );
};

export default Footer;
