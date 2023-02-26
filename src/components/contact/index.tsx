import useColorMode from 'hooks/useColorMode';
import useHiddenMenu from 'hooks/useHiddenMenu';
import dummy from 'images/img-dummy.png';

import * as $ from './styles';

const Contact = () => {
  const { contentDisplay } = useHiddenMenu();
  const { colorMode } = useColorMode();
  const isVisible = contentDisplay === 'block';
  return isVisible ? (
    <$.Wrap>
      <$.MainImage src={colorMode === 'DARK' ? dummy.src : dummy.src} />
      <$.ContactGroup>
        <p>INTERVIEW, STORE PARTNERSHIP, CURATION</p>
        <p>: CONTACT@OYS-LAB.COM</p>
        <p>RENTAL, SPONSORED</p>
        <p>: SHOP@OYS-LAB.COM</p>
        <p>INSTAGRAM</p>
        <p>: @OYS__LAB</p>
      </$.ContactGroup>
    </$.Wrap>
  ) : null;
};

export default Contact;
