import Image from 'next/image';
import mainPic from '../../assets/mainPic.jpeg';
import darkLightIcon from '../../assets/dark-light.png';
import searchIcon from '../../assets/search.png';
import * as $ from './Menu.styles';

// export interface Menu {
//   src: string | StaticImageData;
//   className?: string;
// }
const Menu = () => {
  return (
    <$.Main>
      <$.MenuSec>
        <$.Menus>
          <$.Menu>
            <$.SLink href="/">MENU</$.SLink>
          </$.Menu>
          <$.Menu>
            <$.SLink href="/">ARCHIVE</$.SLink>
          </$.Menu>
        </$.Menus>
        <$.btnSec>
          <$.Button>
            <Image
              width={20}
              height={20}
              src={darkLightIcon}
              alt="dark and Light Icon"
            />
          </$.Button>
          <$.Button>
            <Image width={20} height={20} src={searchIcon} alt="search Icon" />
          </$.Button>
        </$.btnSec>
      </$.MenuSec>
      <$.picSec>
        <Image
          src={mainPic}
          alt="main picture"
          width="450"
          height="505"
          quality={100}
        />
      </$.picSec>
    </$.Main>
  );
};

export default Menu;
