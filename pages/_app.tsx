import React, { useEffect } from "react";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from "../src/Providers/ThemeProvider";
import "../styles/main.scss";

import type { AppProps } from "next/app";
import MainLayout from "../src/layouts/mainLayout";

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
        <MainLayout>
          <CssBaseline />
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
