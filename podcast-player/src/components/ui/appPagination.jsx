import { Container, Pagination } from "@mui/material";

const AppPagination = ({ page, setPage, pageCount }) => {
  const handlePageChange = (e, value) => {
    setPage(value);
  };
  return (
    <Container sx={{ p: 0 }}>
      <Pagination
        onChange={handlePageChange}
        count={pageCount()}
        page={page}
        variant="outlined"
        sx={{ display: "flex", justifyContent: "center" }}
        siblingCount={1}
        boundaryCount={1}
      />
    </Container>
  );
};

export default AppPagination;
