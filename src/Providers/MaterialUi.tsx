import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import React from "react";

const MaterialProvider = ({ children }: { children: React.ReactNode }) => {
  let defaultTheme = createMuiTheme();
  defaultTheme = responsiveFontSizes(defaultTheme);

  const theme = createMuiTheme({
    typography: {
      fontFamily: "Poppins",
      h1: {
        lineHeight: "140%",
        fontWeight: 600,
      },
      h2: {
        lineHeight: "140%",
        fontWeight: 600,
      },
      h3: {
        lineHeight: "140%",
        fontWeight: 600,
      },
      h4: {
        lineHeight: "140%",
        fontWeight: 600,
      },
      h5: {
        lineHeight: "140%",
        fontWeight: 600,
      },
      h6: {
        lineHeight: "140%",
        fontWeight: 600,
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MaterialProvider;
