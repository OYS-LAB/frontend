import { useRecoilValue } from 'recoil';
import { currentState } from 'store/atoms/darkMode';
import * as $ from './TopMarquee.styles';

const TopMarquee = () => {
  const welcomeMessage = 'welcome! soft open will be coming soon';
  const current = useRecoilValue(currentState);
  const borderColor = current.borderColor;

  return (
    <$.Wrap>
      <$.Header borderColor={borderColor}>
        <$.Message>{welcomeMessage}</$.Message>
      </$.Header>
    </$.Wrap>
  );
};

export default TopMarquee;
