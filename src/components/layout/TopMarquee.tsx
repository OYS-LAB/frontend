import * as $ from './TopMarquee.styles';

const TopMarquee = () => {
  const welcomeMessage = 'welcome! soft open will be coming soon';

  return (
    <$.Wrap>
      <$.Header>
        <$.Message>{welcomeMessage}</$.Message>
      </$.Header>
    </$.Wrap>
  );
};

export default TopMarquee;
