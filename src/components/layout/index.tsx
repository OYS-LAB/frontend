import { PropsWithChildren } from 'react';
import * as $ from './Layout.styles';
import TopMarquee from './TopMarquee';
import Footer from './Footer';
import Flakes from './Flakes';
import Menu from './Menu';
import Cart from './Cart';
import useHiddenMenu from 'hooks/useHiddenMenu';

const Layout = (props: PropsWithChildren) => {
  const { children } = props;
  const { isVisible } = useHiddenMenu();

  return (
    <$.LayoutWrap isVisiblePopUpMenu={isVisible}>
      <Flakes />
      <Cart />
      <TopMarquee />
      <Menu />
      {!isVisible && <$.ContentsContainer>{children}</$.ContentsContainer>}
      <Footer />
    </$.LayoutWrap>
  );
};

export default Layout;
