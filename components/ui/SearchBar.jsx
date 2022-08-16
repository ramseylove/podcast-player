import React from "react";
import { Box, TextField } from "@mui/material";
import { useState } from "react";

const SearchBar = ({ setQuery }) => {
  const [text, setText] = useState("");
  const timer = React.useRef();

  const handleInput = (e) => {
    const value = e.currentTarget.value;
    console.log(value);
    clearTimeout(timer.current);

    setText(value);
    timer.current = setTimeout(() => {
      setQuery(value);
    }, 250);
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
        fullWidth="true"
        value={text}
        onChange={handleInput}
      />
    </Box>
  );
};

export default SearchBar;
