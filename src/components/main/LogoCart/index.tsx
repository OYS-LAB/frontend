import useColorMode from 'hooks/useColorMode';
import useHiddenMenu from 'hooks/useHiddenMenu';
import logoDark from 'images/icon-logo-dark.png';
import logoLight from 'images/icon-logo-light.png';
import * as $ from './styles';

const MainHeader = () => {
  const { backgroundColor2, textColor2 } = useColorMode();
  const { colorMode } = useColorMode();
  const { isVisible: isHiddenMenuVisible, display } = useHiddenMenu();
  return (
    <$.MainHeader>
      <$.Logo>
        <$.Img colorMode={colorMode} aria-label="OYS-LAB" />
      </$.Logo>
      <$.CartSection
        backgroundColor2={backgroundColor2}
        isHiddenMenuVisible={isHiddenMenuVisible}
      >
        <$.CartMenus textColor2={textColor2}>
          <$.CartMenu>(KR/USD)</$.CartMenu>
          <$.CartMenu>ACCOUNT</$.CartMenu>
          <$.CartMenu>BAG:0</$.CartMenu>
        </$.CartMenus>
      </$.CartSection>
    </$.MainHeader>
  );
};

export default MainHeader;
