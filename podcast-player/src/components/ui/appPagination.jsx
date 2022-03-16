import React from "react";
import { Container, Pagination } from "@mui/material";

const AppPagination = ({ setPage, pageCount }) => {
  const handleChange = (page) => {
    setPage(page);
  };
  return (
    <Container sx={{ p: 0 }}>
      <Pagination
        onChange={(e) => handleChange(e.target.textContent)}
        count={pageCount}
        variant="outlined"
        sx={{ display: "flex", justifyContent: "center" }}
      />
    </Container>
  );
};

export default AppPagination;
