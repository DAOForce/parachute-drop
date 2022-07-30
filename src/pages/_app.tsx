import '@src/styles/globals.css';
import Navbar from '@src/components/common/Navbar';

import { Global, ThemeProvider } from '@emotion/react';
import { global } from '@src/styles/global';
import theme from '@src/styles/theme';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLogin, setIsLogin] = useState<string | null>('false');
  useEffect(() => {
    setIsLogin(localStorage.getItem('isLogin'));
  }, [isLogin]);

  return (
    <>
      <Global styles={global} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} isLogin={isLogin} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
