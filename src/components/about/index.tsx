import * as $ from './styles';
import useHiddenMenu from 'hooks/useHiddenMenu';
import useColorMode from 'hooks/useColorMode';
import aboutLightImage from 'images/img-light-about.png';
import aboutDarkImage from 'images/img-dark-about.png';

const About = () => {
  const { contentDisplay } = useHiddenMenu();
  const isVisible = contentDisplay === 'block';
  const { colorMode } = useColorMode();

  return isVisible ? (
    <$.Wrap>
      <$.MainImage
        src={colorMode === 'DARK' ? aboutDarkImage.src : aboutLightImage.src}
      />
    </$.Wrap>
  ) : null;
};

export default About;
