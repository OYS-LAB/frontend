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
      <$.FooterHr borderColor={borderColor} />
      <$.FooterMenuWrap>
        <$.Copyright textcolor={textcolor}>© 2023, OYS.</$.Copyright>
        <$.FooterNavigation role="navigation">
          <li>
            <Link href={Path.ABOUT} onClick={closeToggle}>
              <$.Anchor textcolor={textcolor}>ABOUT</$.Anchor>
            </Link>
          </li>
          <li>
            <$.Anchor textcolor={textcolor}>STOCKIST</$.Anchor>
          </li>
          <li>
            <$.Anchor textcolor={textcolor}>ORDER</$.Anchor>
          </li>
          <li>
            <Link href={Path.CONTACT} onClick={closeToggle}>
              <$.Anchor textcolor={textcolor}>CONTACT</$.Anchor>
            </Link>
          </li>
          <li>
            <Link href={Path.TERMOFUSE} onClick={closeToggle}>
              <$.Anchor textcolor={textcolor}>TERMS OF USE</$.Anchor>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/oys__lab/"
              target="_blank"
              onClick={closeToggle}
            >
              <$.Anchor textcolor={textcolor}>INSTAGRAM</$.Anchor>
            </Link>
          </li>
        </$.FooterNavigation>
      </$.FooterMenuWrap>
      <$.FooterInfoContainer display={display}>
        <p>COMPANY : OYS CO.,LTD</p>
        <p>REPRESENTATIVE : SYO</p>
        <p>REGISTRATION : </p>
        <p>EMAIL : CONTACT@OYS-LAB.COM</p>
      </$.FooterInfoContainer>
      <$.Copyright isMobile textcolor={textcolor}>
        © 2023, OYS.
      </$.Copyright>
    </$.Footer>
  );
};

export default Footer;
