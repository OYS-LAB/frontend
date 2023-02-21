import useColorMode from 'hooks/useColorMode';
import dummy from 'images/img-dummy.png';

import * as $ from './styles';

const Contact = () => {
  const { colorMode } = useColorMode();
  return (
    <$.Wrap>
      <$.MainImage src={colorMode === 'DARK' ? dummy.src : dummy.src} />
      <$.ContactGroup>
        <ul>
          <$.ContactGroupList>
            INTERVIEW, STORE PARTNERSHIP, CURATION
          </$.ContactGroupList>
          <$.ContactGroupList>: CONTACT@OYS_LAB.COM</$.ContactGroupList>
          <$.ContactGroupList>RENTAL, SPONSORED</$.ContactGroupList>
          <$.ContactGroupList>: SHOP@OYS-LAB.COM</$.ContactGroupList>
          <$.ContactGroupList>INSTAGRAM</$.ContactGroupList>
          <$.ContactGroupList>: @OYS_LAB</$.ContactGroupList>
        </ul>
      </$.ContactGroup>
    </$.Wrap>
  );
};

export default Contact;
