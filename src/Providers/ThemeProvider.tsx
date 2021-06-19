import { ThemeProvider, responsiveFontSizes, createTheme } from '@material-ui/core/styles'
import React from 'react'

declare module '@material-ui/core/Button' {
  interface ButtonPropsVariantOverrides {
    bright: true
    light: true
  }
}

const MaterialProvider = ({ children }: { children: React.ReactNode }) => {
  let defaultTheme = createTheme()
  defaultTheme = responsiveFontSizes(defaultTheme)

  const theme = createTheme({
    palette: {
      primary: {
        main: 'rgba(21, 21, 21, 1)'
      },
      secondary: {
        main: 'rgba(106, 152, 60, 1)'
      }
    },
    components: {
      MuiBadge: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: 'rgba(229, 112, 75, 1)'
          }
        }
      },
      MuiButton: {
        variants: [
          {
            props: { variant: 'bright' },
            style: {
              backgroundColor: 'rgba(245, 245, 245, 1)'
            }
          },
          {
            props: { variant: 'light' },
            style: {
              padding: '0',
              margin: '0',
              background: 'transparent',
              fontSize: '15px',
              fontWeight: 500
            }
          }
        ],
        styleOverrides: {
          root: {
            borderRadius: '12px',
            borderWidth: '2px',
            borderStyle: 'none',
            borderColor: 'transparent',
            fontSize: '15px',
            fontWeight: 700,
            textTransform: 'none'
          },
          outlined: {
            backgroundColor: 'transparent',
            borderColor: '#92c064',
            color: 'rgba(21,21,21,1)',
            padding: '12px 16px'
          },
          contained: {
            backgroundColor: '#6a983c',
            border: '#46760a',
            color: '#FFF',
            padding: '12px 16px'
          },
          sizeLarge: {
            padding: '12px 48px'
          },
          sizeSmall: {
            padding: '6px 12px'
          }
        }
      }
    },
    typography: {
      fontFamily: 'Poppins',
      h1: {
        lineHeight: '140%',
        fontWeight: 600
      },
      button: {
        borderColor: 'red',
        border: '1px solid red'
      },
      h2: {
        lineHeight: '140%',
        fontWeight: 600
      },
      h3: {
        lineHeight: '140%',
        fontWeight: 600
      },
      h4: {
        lineHeight: '140%',
        fontWeight: 600
      },
      h5: {
        lineHeight: '140%',
        fontWeight: 600
      },
      h6: {
        lineHeight: '140%',
        fontWeight: 600
      }
    }
  })

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default MaterialProvider
