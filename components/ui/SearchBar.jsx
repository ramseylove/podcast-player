import { Box, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const SearchBar = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        alignSelf: "end",
        marginBottom: "1rem",
      }}
    >
      <TextField id="search" label="Search" type="search" variant="standard" />
    </Box>
  );
};

export default SearchBar;
