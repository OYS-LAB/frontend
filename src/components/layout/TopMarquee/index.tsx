import useColorMode from 'hooks/useColorMode';
import * as $ from './styles';

const TopMarquee = () => {
  const welcomeMessage = 'welcome! soft open will be coming soon';
  const { borderColor } = useColorMode();

  return (
    <$.Wrap>
      <$.Header borderColor={borderColor}>
        <$.Message>{welcomeMessage}</$.Message>
      </$.Header>
    </$.Wrap>
  );
};

export default TopMarquee;
