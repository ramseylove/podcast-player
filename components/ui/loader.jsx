import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "95vh",
        minWidth: "95vw",
      }}
      component={"div"}
    >
      <CircularProgress />
      <Typography variant="h5">Loading...</Typography>
    </Box>
  );
}
