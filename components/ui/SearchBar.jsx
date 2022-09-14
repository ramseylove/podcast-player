import React, { useState } from "react";
import { Box, TextField } from "@mui/material";

const SearchBar = ({ setQuery }) => {
  const [text, setText] = useState("");
  const timer = React.useRef(null);

  const handleInput = (e) => {
    const value = e.currentTarget.value;
    clearTimeout(timer.current);

    setText(value);
    timer.current = setTimeout(() => {
      setQuery({ q: value });
    }, 550);
    if (text === "") {
      setQuery(null);
    }
  };
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
        fullWidth={true}
        value={text}
        onChange={handleInput}
      />
    </Box>
  );
};

export default SearchBar;
