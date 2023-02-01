import logo from 'images/img-logo.png';
import * as $ from './MainHeader.styles';

const MainHeader = () => {
  return (
    <$.MainHeader>
      <$.Logo>
        <$.Image src={logo.src} alt="logo" />
      </$.Logo>
      <$.CartSection>
        <$.CartMenus>
          <$.CartMenu>(KR/USD)</$.CartMenu>
          <$.CartMenu>ACCOUNT</$.CartMenu>
          <$.CartMenu>BAG:0</$.CartMenu>
        </$.CartMenus>
      </$.CartSection>
    </$.MainHeader>
  );
};

export default MainHeader;
