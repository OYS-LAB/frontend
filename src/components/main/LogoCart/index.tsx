import useColorMode from 'hooks/useColorMode';
import logo from 'images/img-logo.png';
import * as $ from './styles';

const MainHeader = () => {
  const { backgroundColor2, textColor2 } = useColorMode();

  return (
    <$.MainHeader>
      <$.Logo>
        <$.Image src={logo.src} alt="logo" />
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
