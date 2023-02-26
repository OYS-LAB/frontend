import useColorMode from 'hooks/useColorMode';
import * as $ from './styles';

const TopMarquee = () => {
  const welcomeMessage = 'welcome! soft open will be coming soon';
  const { borderColor, backgroundColor1 } = useColorMode();

  return (
    <$.TopMarqueeWrap backgroundColor1={backgroundColor1}>
      <$.TopMarqueeHeader>
        <$.TopMarqueeMessage>{welcomeMessage}</$.TopMarqueeMessage>
        <$.TopMarqueeHr borderColor={borderColor} />
      </$.TopMarqueeHeader>
    </$.TopMarqueeWrap>
  );
};

export default TopMarquee;
