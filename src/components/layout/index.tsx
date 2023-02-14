import { PropsWithChildren } from 'react';
import * as $ from './Layout.styles';
import TopMarquee from './TopMarquee';
import Footer from './Footer';
import Flakes from './Flakes';
import Menu from './Menu';
import LogoCart from './LogoCart';

const Layout = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <$.Wrap>
      <Flakes />
      <TopMarquee />
      <$.ContentsContainer>
      <LogoCart />
      <Menu/>
      {children}
      </$.ContentsContainer>
      <Footer />
    </$.Wrap>
  );
};

export default Layout;
