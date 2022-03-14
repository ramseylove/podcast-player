import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#cbaea4",
      main: "#9d858d",
      dark: "#404e5c",
      contrastText: "#fff",
    },
    secondary: {
      light: "#d8e2dc",
      main: "#cbaea4",
      dark: "#688b58",
      contrastText: "#000",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          h6: "h6",
          subtitle1: "h3",
          subtitle2: "subtitle1",
          body1: "span",
          body2: "span",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
});
