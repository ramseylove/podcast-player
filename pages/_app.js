import "../src/globals.css";
import { theme } from "../theme/theme";
import { ThemeProvider } from "@mui/material";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
