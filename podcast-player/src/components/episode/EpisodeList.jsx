import React, { useState, useEffect } from "react";

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
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [episodes, setEpisodes] = useState(null);
  const [selectedShow, setSelectedShow] = useState({});
  const [selectedEpisode, setSelectedEpisode] = useState();
  const [firstTenEpisodes, setFirstTenEpisodes] = useState([]);
  const [currentEpisodes, setCurrentEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [episodesPerPage, setEpisodesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(null);

  /**
   * Getting episodes
   */
  useEffect(() => {
    let isCancelled = false;

    if (show && !isCancelled) {
      setIsLoading(true);
      getEpisodes(show.feed)
        .then((data) => {
          setSelectedShow({ ...data.channel });
          setEpisodes([...data.channel.episodes]);
          // setFirstTenEpisodes([...data.channel.episodes].slice(0, 9));
          setPageCount(Math.ceil(episodes.length / episodesPerPage));
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

  //TODO: pagination logic

  if (isLoading || !currentEpisodes) {
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
          sx={{ alignSelf: "center", pt: "1.3rem" }}
        >
          {show.title}
        </Typography>
        <Typography gutterBottom variant="body2" component={"p"}>
          {selectedShow.description}
        </Typography>
      </Box>
      <Box>
        <List sx={{ mt: 3 }} aria-label="episode list">
          {currentEpisodes.map((episode) => (
            <EpisodeItem
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
          image={selectedShow.image}
          setSelectedEpisodePlaying={setSelectedEpisodePlaying}
          onClose={closeEpisodeModalHandler}
          open={modalOpen}
        />
      )}
      <AppPagination setPage={setCurrentPage} pageCount={pageCount} />
    </Container>
  );
}

export default EpisodeList;
