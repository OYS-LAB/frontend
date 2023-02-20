import * as $ from './styles';
import useHiddenMenu from 'hooks/useHiddenMenu';
import useColorMode from 'hooks/useColorMode';
import mainLight from 'images/img-light-main.jpg';
import mainDark from 'images/img-dark-main.jpg';

const Contents = () => {
  const { contentDisplay } = useHiddenMenu();
  const isVisible = contentDisplay === 'block';
  const { colorMode } = useColorMode();

  return isVisible ? (
    <$.Wrap>
      <$.MainImage src={colorMode === 'DARK' ? mainDark.src : mainLight.src} />
    </$.Wrap>
  ) : null;
};

export default Contents;
