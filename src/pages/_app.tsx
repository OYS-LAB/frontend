import TopMarquee from 'components/layout/TopMarquee';
import Footer from 'components/layout/Footer';
import GlobalStyle from 'components/GlobalStyle';
import type { AppProps } from 'next/app';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <TopMarquee />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
