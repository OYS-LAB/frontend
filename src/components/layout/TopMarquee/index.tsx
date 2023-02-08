import useColorMode from 'hooks/useColorMode';
import * as $ from './styles';

const TopMarquee = () => {
  const welcomeMessage = 'welcome! soft open will be coming soon';
  const { borderColor } = useColorMode();

  return (
    <$.Wrap>
      <$.Header>
        <$.Message>{welcomeMessage}</$.Message>
        <$.Hr borderColor={borderColor} />
      </$.Header>
    </$.Wrap>
  );
};

export default TopMarquee;
