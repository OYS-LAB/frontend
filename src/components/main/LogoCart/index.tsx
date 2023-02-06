import useColorMode from 'hooks/useColorMode';
import logoDark from 'images/icon-logo-dark.png';
import logoLight from 'images/icon-logo-light.png';
import * as $ from './styles';

const MainHeader = () => {
  const { backgroundColor2, textColor2 } = useColorMode();
  const { colorMode } = useColorMode();
  const changeLogoColor = () => {
    colorMode === 'DARK' ? logoLight : logoDark;
  };
  return (
    <$.MainHeader>
      <$.Logo>
        {/* <$.Image src={`${changeLogoColor}.src`} alt="logo" /> */}
        <$.Img colorMode={colorMode} />
      </$.Logo>
      <$.CartSection backgroundColor2={backgroundColor2}>
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
