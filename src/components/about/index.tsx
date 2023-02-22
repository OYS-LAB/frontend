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
        <$.AboutDescription borderColor={borderColor}>
          <p>
            OYS-LAB, based in Seoul, is dedicated to creating spactial things
            that are sustainable, timeless, and sensuous. Our mission is to
            redefine what it means to be fashionable furnishing by infusing
            sustainability into every aspect of our work, from the vmaterials we
            choose to the designs we craft. We believe that sustainability and
            beauty are not mutually exclusive, and we're committed to proving
            that through our products. Our goal is to create a sensuous, tactile
            experience that engages all your senses while creating sophisticated
            products that can coexist with the earth. Join us as we continue to
            push the boundaries of sustainable fashion and design for a better,
            more beautiful world.
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
