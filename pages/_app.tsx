import React, { useEffect } from "react";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from "../src/Providers/ThemeProvider";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import Container from "@material-ui/core/Container";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");

    jssStyles &&
      jssStyles.parentElement &&
      jssStyles.parentElement.removeChild(jssStyles);
  }, []);

  return (
    <>
      <Head>
        <title>Ecommerce Open Source project</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="author" content="Adrian Bielec, zilibdev@gmail.com" />
      </Head>
      <ThemeProvider>
        <CssBaseline />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
