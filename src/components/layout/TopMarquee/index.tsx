import useColorMode from 'hooks/useColorMode';
import * as $ from './styles';

const TopMarquee = () => {
  const welcomeMessage = 'welcome! soft open will be coming soon';
  const { baseColor, reverseColor } = useColorMode();

  return (
    <$.TopMarqueeWrap baseColor={baseColor}>
      <$.TopMarqueeHeader>
        <$.TopMarqueeMessage>{welcomeMessage}</$.TopMarqueeMessage>
        <$.TopMarqueeHr reverseColor={reverseColor} />
      </$.TopMarqueeHeader>
    </$.TopMarqueeWrap>
  );
};

export default TopMarquee;
