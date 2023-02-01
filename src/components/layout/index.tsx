import { PropsWithChildren } from 'react';
import * as $ from './Layout.styles';
import TopMarquee from './TopMarquee';
import Footer from './Footer';

const Layout = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <$.Wrap>
      <TopMarquee />
      <$.ContentsContainer>{children}</$.ContentsContainer>
      <Footer />
    </$.Wrap>
  );
};

export default Layout;
