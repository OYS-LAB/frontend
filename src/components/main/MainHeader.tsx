import Image from 'next/image';
import logo from '../../assets/logo.png';
import * as $ from './MainHeader.styles';

const MainHeader = () => {
  return (
    <$.MainHeader>
      <$.Logo>
        <Image src={logo} alt="logo" quality={100} />
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
