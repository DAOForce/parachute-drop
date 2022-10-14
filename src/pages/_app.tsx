import '@src/styles/globals.css';

import { Global, ThemeProvider } from '@emotion/react';
import Navbar from '@src/components/common/Navbar';
import MobileMain from '@src/components/Main/MobileMain';
import useWindowSize from '@src/hooks/useWindowSize';
import { global } from '@src/styles/global';
import theme from '@src/styles/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [isLogin, setIsLogin] = useState<string | null>('false');
  const size = useWindowSize();
  const BREAK_POINT = 768;

  useEffect(() => {
    setIsLogin(localStorage.getItem('isLogin'));
  }, [isLogin]);

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />{' '}
        <meta
          name="description"
          content="Parachute Drop is a decentralized DAO tooling specialized in sustainability."
        />
        <meta
          property="og:description"
          content="Parachute Drop is a decentralized DAO tooling specialized in sustainability."
        />
        <meta
          name="twitter:description"
          content="Parachute Drop is a decentralized DAO tooling specialized in sustainability."
        />
        <meta
          property="og:image"
          content="https://ipfs.io/ipfs/bafybeigj2u4p5j6en7zebho7bczqpglgfq4yckcqguuw2rwpa62rpuwz5e/og-nemo.png"
        />
        <meta property="og:url" content="https://parachute-drop-frontend.vercel.app/" />
        <meta property="twitter:card" content="website" />
        <meta property="twitter:site" content="https://parachute-drop-frontend.vercel.app/" />
        <meta
          name="twitter:image"
          content="https://ipfs.io/ipfs/bafybeihrm4hggv7lcbcwcskyskqstfjpr6hqjirbzva255aiuyquthyesu/og-onemo.png"
        />
      </Head>
      <Global styles={global} />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          {size > BREAK_POINT ? <Component {...pageProps} isLogin={isLogin} /> : <MobileMain />}
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
