import React from 'react';
import { ServerStyleSheets } from '@mui/styles';
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  
});

export default function ApplicationDocument() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" />
      </Head>
      <body>

        <Main />
        <NextScript />


      </body>
    </Html>
  );
}

ApplicationDocument.getInitialProps = async (ctx: any) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) => (props: any) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};