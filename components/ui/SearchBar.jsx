import { Box, TextField } from "@mui/material";
const SearchBar = () => {
  return (
    <Box
      component="form"
      sx={{
        alignSelf: "end",
        marginBottom: "1rem",
        flexBasis: "20rem",
        backgroundColor: "primary.main",
        color: "primary.contrastText",
      }}
      autoComplete="off"
    >
      <TextField
        id="search"
        label="Search"
        type="search"
        variant="filled"
        fullWidth="true"
      />
    </Box>
  );
};

export default SearchBar;
