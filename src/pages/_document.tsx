import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Gothic+A1&family=Red+Hat+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>OYS-LAB</title>
        <meta name="description" content="OYS-LAB" />
        <meta
          name="viewport"
          content="width=device-width, minimal-ui, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
