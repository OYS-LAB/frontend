import useHiddenMenu from 'hooks/useHiddenMenu';
import useColorMode from 'hooks/useColorMode';
import * as $ from './styles';

const Homeobject = () => {
  const { contentDisplay } = useHiddenMenu();
  const { reverseColor } = useColorMode();
  const isVisible = contentDisplay === 'block';

  return isVisible ? (
    <$.HomeObjectSection>
      <$.HomeObjectSectionHeader>HOME OBJECT</$.HomeObjectSectionHeader>
      <$.HomeObjectSectionHr reverseColor={reverseColor} />
      <$.HomeObjectMessageWrap>
        <p>No Products</p>
        <p>Items will be updated soon!</p>
      </$.HomeObjectMessageWrap>
    </$.HomeObjectSection>
  ) : null;
};

export default Homeobject;
