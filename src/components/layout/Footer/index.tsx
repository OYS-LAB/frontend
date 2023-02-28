import useColorMode from 'hooks/useColorMode';
import useHiddenMenu from 'hooks/useHiddenMenu';
import Path from 'models/Path';
import Link from 'next/link';
import * as $ from './styles';

const Footer = () => {
  const { baseColor, reverseColor } = useColorMode();

  const {
    closeToggle,
    isVisible: isHiddenMenuVisible,
    height,
    display,
  } = useHiddenMenu();

  return (
    <$.Footer
      baseColor={baseColor}
      reverseColor={reverseColor}
      height={height}
      isHiddenMenuVisible={isHiddenMenuVisible}
    >
      <$.FooterHr reverseColor={reverseColor} />
      <$.FooterMenuWrap>
        <$.Copyright reverseColor={reverseColor}>© 2023, OYS.</$.Copyright>
        <$.FooterNavigation role="navigation">
          <li>
            <Link href={Path.ABOUT} onClick={closeToggle}>
              <$.Anchor reverseColor={reverseColor}>ABOUT</$.Anchor>
            </Link>
          </li>
          {/* 
          <li>
            <$.Anchor reverseColor={reverseColor}>STOCKIST</$.Anchor>
          </li>

          <li>
            <$.Anchor reverseColor={reverseColor}>ORDER</$.Anchor>
          </li>
           */}
          <li>
            <Link href={Path.CONTACT} onClick={closeToggle}>
              <$.Anchor reverseColor={reverseColor}>CONTACT</$.Anchor>
            </Link>
          </li>
          <li>
            <Link href={Path.TERMOFUSE} onClick={closeToggle}>
              <$.Anchor reverseColor={reverseColor}>TERMS OF USE</$.Anchor>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/oys__lab/"
              target="_blank"
              onClick={closeToggle}
            >
              <$.Anchor reverseColor={reverseColor}>INSTAGRAM</$.Anchor>
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
      <$.Copyright isMobile reverseColor={reverseColor}>
        © 2023, OYS.
      </$.Copyright>
    </$.Footer>
  );
};

export default Footer;
