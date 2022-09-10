import '@src/styles/globals.css';

import { Global, ThemeProvider } from '@emotion/react';
import Navbar from '@src/components/common/Navbar';
import { global } from '@src/styles/global';
import theme from '@src/styles/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [isLogin, setIsLogin] = useState<string | null>('false');

  useEffect(() => {
    setIsLogin(localStorage.getItem('isLogin'));
  }, [isLogin]);

  return (
    <>
      <Global styles={global} />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} isLogin={isLogin} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
