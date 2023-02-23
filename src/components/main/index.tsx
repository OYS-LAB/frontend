import * as $ from './styles';
import useColorMode from 'hooks/useColorMode';
import mainLight from 'images/img-light-main.jpg';
import mainDark from 'images/img-dark-main.jpg';

const IMAGE_MAP = {
  LIGHT: mainLight.src,
  DARK: mainDark.src,
};

const Contents = () => {
  const { colorMode } = useColorMode();

  return (
    <$.Wrap>
      <$.MainImage src={IMAGE_MAP[colorMode]} />
    </$.Wrap>
  );
};

export default Contents;
