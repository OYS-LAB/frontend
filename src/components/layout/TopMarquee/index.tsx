import useColorMode from 'hooks/useColorMode';
import * as $ from './styles';

const TopMarquee = () => {
  const welcomeMessage = 'welcome! soft open will be coming soon';
  const { borderColor, backgroundColor1 } = useColorMode();

  return (
    <$.Wrap backgroundColor1={backgroundColor1}>
      <$.Header>
        <$.Message>{welcomeMessage}</$.Message>
        <$.Hr borderColor={borderColor} />
      </$.Header>
    </$.Wrap>
  );
};

export default TopMarquee;
