import Layout from 'components/layout';
import GlobalStyle from 'components/GlobalStyle';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
