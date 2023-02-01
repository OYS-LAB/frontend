import * as $ from './Main.styles';
import MainHeader from './MainHeader';
import Menu from './Menu';
import Contents from './Contents';

const Main = () => {
  return (
    <$.Wrap>
      <MainHeader />
      <Menu />
      <Contents />
    </$.Wrap>
  );
};

export default Main;
