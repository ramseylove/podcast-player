import { useState, useCallback } from "react";

import ResultItem from "./ResultItem";
import { Box, Container, List, Typography } from "@mui/material";
import ErrorAlert from "../ui/errorAlert";
import AppPagination from "../ui/appPagination";

function SearchResults({ results }) {
  const [showsPerPage, setShowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const podcasts = results?.results || results?.podcasts;

  /**
   *  Pagination Logic
   */
  // const updatePageCount = useCallback(() => {
  //   return Math.ceil(podcasts.length / episodesPerPage);
  // }, [currentShow, episodesPerPage]);

  // const paginateEpisodes = (arr) => {
  //   const firstId = (currentPage - 1) * episodesPerPage;
  //   const lastId = currentPage * episodesPerPage;
  //   return arr.slice(firstId, lastId);
  // };

  return (
    <Container maxWidth="md">
      <Box>
        <List sx={{ mt: 3 }} aria-label="episode list">
          {podcasts.map((podcast) => (
            <ResultItem key={podcast.id} show={podcast} />
          ))}
        </List>
      </Box>
      {/* <Box sx={{ mb: "2rem" }}>
        <AppPagination
          page={currentPage}
          setPage={setCurrentPage}
          pageCount={updatePageCount}
        />
      </Box> */}
    </Container>
  );
}

export default SearchResults;
