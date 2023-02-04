import * as $ from './Main.styles';
import LogoCart from './LogoCart';
import Menu from './Menu';
import Contents from './Contents';

const Main = () => {
  return (
    <$.Wrap>
      <LogoCart />
      <Menu />
      <Contents />
    </$.Wrap>
  );
};

export default Main;
