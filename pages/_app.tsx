import CssBaseline from '@material-ui/core/CssBaseline'
import { StyledEngineProvider } from '@material-ui/core/styles'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

import ThemeProvider from '../src/Providers/ThemeProvider'
import MainLayout from '../src/layouts/mainLayout'
import '../styles/main.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Ecommerce Open Source project</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="author" content="Adrian Bielec, zilibdev@gmail.com" />
      </Head>
      <StyledEngineProvider injectFirst>
        <ThemeProvider>
          <MainLayout>
            <CssBaseline />
            <Component {...pageProps} />
          </MainLayout>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  )
}

export default MyApp
