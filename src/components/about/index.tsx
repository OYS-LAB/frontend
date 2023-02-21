import * as $ from './styles';
import useHiddenMenu from 'hooks/useHiddenMenu';
import useColorMode from 'hooks/useColorMode';
import aboutDarkImage from 'images/img-dark-about.jpg';
import aboutLightImage from 'images/img-light-about.png';

const About = () => {
  const { contentDisplay } = useHiddenMenu();
  const isVisible = contentDisplay === 'block';
  const { colorMode, borderColor } = useColorMode();

  return isVisible ? (
    <$.Wrap>
      <$.AboutMain>
        <$.AboutImageWrap>
          <$.AboutImage
            src={
              colorMode === 'DARK' ? aboutDarkImage.src : aboutLightImage.src
            }
          />
        </$.AboutImageWrap>
        <$.AboutDescription>
          <p>
            OYS-LAB, based in Seoul, is dedicated to creating spactial things
            that are sustainable, time-less, and sensuous. Our mission is to
            redefine what it means to be fashionable furnishing by infusing
            sustainability into every aspect of our work, from the materials we
            choose to the de-signs we craft. OYS-LAB, based in Seoul, is
            dedicated to creating spactial things that are sustainable,
            time-less, and sensuous. Our mission is to redefine what it means to
            be fashionable furnishing by infusing sustainability into every
            aspect of our work, from the materials we choose to the de-signs we
            craft.
          </p>
        </$.AboutDescription>
      </$.AboutMain>
      <$.AboutFooter>
        <ul>
          <li>OWN</li>
          <li>YOUR</li>
          <li>SPACE.</li>
        </ul>
      </$.AboutFooter>
    </$.Wrap>
  ) : null;
};

export default About;
