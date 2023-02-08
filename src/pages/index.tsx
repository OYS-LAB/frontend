import Head from 'next/head';
import Main from 'components/main';
import { Fragment } from 'react';

export default function IndexPage() {
  return (
    <Fragment>
      <Head>
        <title>OYS-LAB</title>
        <meta name="description" content="OYS-LAB" />
        <meta
          name="viewport"
          content="width=device-width, minimal-ui, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
      <Main />;
    </Fragment>
  );
}
