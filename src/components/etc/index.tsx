import useHiddenMenu from 'hooks/useHiddenMenu';
import useColorMode from 'hooks/useColorMode';
import * as $ from './styles';

const Etc = () => {
  const { contentDisplay } = useHiddenMenu();
  const { reverseColor } = useColorMode();
  const isVisible = contentDisplay === 'block';

  return isVisible ? (
    <$.EtcSection>
      <$.EtcSectionHeader>ETC.</$.EtcSectionHeader>
      <$.EtcSectionHr reverseColor={reverseColor} />
      <$.EtcMessageWrap>
        <p>No Products</p>
        <p>Items will be updated soon!</p>
      </$.EtcMessageWrap>
    </$.EtcSection>
  ) : null;
};

export default Etc;
