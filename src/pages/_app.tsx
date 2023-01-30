import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import GlobalStyle from 'components/GlobalStyle';
import type { AppProps } from 'next/app';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      {/* <Header /> */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
