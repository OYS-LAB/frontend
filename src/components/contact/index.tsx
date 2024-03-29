import useColorMode from 'hooks/useColorMode';
import useHiddenMenu from 'hooks/useHiddenMenu';
import imgAboutLight from 'images/img-light-contact.jpg';
import imgAboutDark from 'images/img-dark-contact.jpg';

import * as $ from './styles';

const Contact = () => {
  const { contentDisplay } = useHiddenMenu();
  const { colorMode } = useColorMode();
  const isVisible = contentDisplay === 'block';
  return isVisible ? (
    <$.ContactWrap>
      <$.ContactMainImage
        src={colorMode === 'DARK' ? imgAboutDark.src : imgAboutLight.src}
        alt="OYS-LAB contact image"
      />
      <$.ContactGroup>
        <p>INTERVIEW, STORE PARTNERSHIP, CURATION</p>
        <p>: CONTACT@OYS-LAB.COM</p>
        <p>SPONSORED, RENTAL</p>
        <p>: CONTACT@OYS-LAB.COM</p>
        <p>or CONTACT INSTAGRAM DM</p>
        <p>INSTAGRAM</p>
        <p>: @OYS__LAB</p>
      </$.ContactGroup>
    </$.ContactWrap>
  ) : null;
};

export default Contact;
