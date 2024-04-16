import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider, StyledEngineProvider, createTheme, styled } from '@mui/material/styles';
import { useEffect } from 'react';
import ApplicationProvider from '../context/application/ApplicationProvider';
import { Roboto } from 'next/font/google';
import type { AppProps } from "next/app";
import NavigationMenu from '../components/navbar/NavigationMenu';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          color: "darkred",
          backgroundColor: "grey",
          "& h1": {
            color: "black"
          }
        }
      }
    }
  }
});

const ContentWrapper = styled('div')`
  margin-top:3rem;
`;

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles: Element | null = document.querySelector('#jss-server-side');
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <StyledEngineProvider injectFirst>
      <AppRouterCacheProvider options={{ prepend: true }}>
        <ThemeProvider theme={theme}>
          <main>
            <ApplicationProvider>
              <NavigationMenu />
              <ContentWrapper>
                <Component {...pageProps} />
              </ContentWrapper>
            </ApplicationProvider>
          </main>
        </ThemeProvider>
      </AppRouterCacheProvider></StyledEngineProvider>
  );
}
