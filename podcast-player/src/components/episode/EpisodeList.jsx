import { useState, useEffect } from "react";

import { getEpisodes } from "../../utils/api-utils";
import { Box, Container, List, Typography } from "@mui/material";
import EpisodeModal from "./EpisodeModal";
import EpisodeItem from "./EpisodeItem";
import Loader from "../ui/loader";
import ErrorAlert from "../ui/errorAlert";
import AppPagination from "../ui/appPagination";

function EpisodeList({
  show,
  selectedEpisodePlaying,
  setSelectedEpisodePlaying,
  selectedEpisode,
  setSelectedEpisode,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentShow, setCurrentShow] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [episodesPerPage, setEpisodesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(10);

  /**
   * Getting episodes
   */
  useEffect(() => {
    let isCancelled = false;

    if (show && !isCancelled) {
      setIsLoading(true);
      getEpisodes(show.feed)
        .then((data) => {
          setCurrentShow(data.channel);
          setCurrentPage(1);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error.msg);
          setIsLoading(false);
        });
    }

    // cleanup
    return () => {
      isCancelled = true;
    };
  }, [show]);

  /**
   *  Pagination Logic
   */
  useEffect(() => {
    const updatePageCount = () => {
      const realPageCount = Math.ceil(
        currentShow?.episodes.length / episodesPerPage
      );
      setPageCount(realPageCount);
    };
    updatePageCount();
  }, [currentShow, episodesPerPage]);

  const paginateEpisodes = (arr) => {
    const firstId = (currentPage - 1) * episodesPerPage;
    const lastId = currentPage * episodesPerPage;
    return arr.slice(firstId, lastId);
  };

  if (isLoading || !currentShow) {
    return <Loader />;
  }

  function playEpisodeHandler(episode) {
    setSelectedEpisodePlaying(episode);
  }

  function closeEpisodeModalHandler() {
    if (selectedEpisode) {
      setSelectedEpisode(null);
    }
  }

  function showEpisodeModalHandler(episode) {
    setModalOpen(true);
    setSelectedEpisode(episode);
  }

  return (
    <Container maxWidth="md">
      {error && <ErrorAlert error={error} />}
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          gutterBottom
          variant="h4"
          component={"h1"}
          sx={{ alignSelf: { sm: "normal", xs: "center" }, pt: "1.3rem" }}
        >
          {show.title}
        </Typography>
        <Typography gutterBottom variant="body2" component={"p"}>
          {currentShow.description}
        </Typography>
      </Box>
      <Box>
        <List sx={{ mt: 3 }} aria-label="episode list">
          {paginateEpisodes(currentShow.episodes).map((episode) => (
            <EpisodeItem
              key={episode.guid.text}
              episode={episode}
              selectedEpisodePlaying={selectedEpisodePlaying}
              showEpisodeModalHandler={showEpisodeModalHandler}
              playEpisodeHandler={playEpisodeHandler}
            />
          ))}
        </List>
      </Box>
      {selectedEpisode && (
        <EpisodeModal
          episode={selectedEpisode}
          image={currentShow.image}
          setSelectedEpisodePlaying={setSelectedEpisodePlaying}
          onClose={closeEpisodeModalHandler}
          open={modalOpen}
        />
      )}
      <Box sx={{ mb: "2rem" }}>
        <AppPagination
          page={currentPage}
          setPage={setCurrentPage}
          pageCount={pageCount}
        />
      </Box>
    </Container>
  );
}

export default EpisodeList;
