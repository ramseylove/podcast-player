import { AppBar, Box } from "@mui/material";

function Header({ children }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        sx={{
          flexGrow: 1,
          height: {
            xs: "auto",
            sm: "8rem",
          },
          bgcolor: "primary.main",
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          justifyContent: "space-between",
        }}
      >
        {children}
      </AppBar>
    </Box>
  );
}

export default Header;
