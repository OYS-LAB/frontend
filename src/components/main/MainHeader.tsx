import logo from 'images/img-logo.png';
import { useRecoilValue } from 'recoil';
import { currentState } from 'store/atoms/darkMode';
import * as $ from './MainHeader.styles';

const MainHeader = () => {
  const current = useRecoilValue(currentState);
  const backgroundColor2 = current.backgroundColor2;
  const textColor2 = current.color2;
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
