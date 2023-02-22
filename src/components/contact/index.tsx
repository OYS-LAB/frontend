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
        <ul>
          <$.ContactGroupList>
            INTERVIEW, STORE PARTNERSHIP, CURATION
          </$.ContactGroupList>
          <$.ContactGroupList>: CONTACT@OYS-LAB.COM</$.ContactGroupList>
          <$.ContactGroupList>RENTAL, SPONSORED</$.ContactGroupList>
          <$.ContactGroupList>: SHOP@OYS-LAB.COM</$.ContactGroupList>
          <$.ContactGroupList>INSTAGRAM</$.ContactGroupList>
          <$.ContactGroupList>: @OYS__LAB</$.ContactGroupList>
        </ul>
      </$.ContactGroup>
    </$.Wrap>
  ) : null;
};

export default Contact;
