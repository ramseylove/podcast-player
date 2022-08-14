import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#806e73",
      contrastText: "#e4e3e3",
    },
    secondary: {
      main: "#688b58",
    },
    text: {
      primary: "#ebebeb",
    },
    background: {
      default: "#494b4d",
      paper: "#2e333a",
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
    MuiListItem: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          "&.Mui-selected": {
            backgroundColor: "primary.dark",
            "&.Mui-focusVisible": { background: "primary.dark" },
          },
        },
      },
    },
  },
});

const oldTheme = {
  palette: {
    primary: {
      main: "#9d858d",
      contrastText: "#fff",
    },
    secondary: {
      main: "#688b58",
      contrastText: "#000",
    },
  },
};
