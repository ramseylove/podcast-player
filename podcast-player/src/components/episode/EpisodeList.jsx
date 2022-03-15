import React, { useState } from "react";
import { useEffect } from "react";
import { getEpisodes } from "../../utils/api-utils";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
// import { makeStyles } from "@mui/styles";

import EpisodeModal from "./EpisodeModal";

// const useStyles = makeStyles({

//   listItem: {
//     "&.Mui-selected": {
//       backgroundColor: "primary.dark",
//       "&.Mui-focusVisible": { background: "pink" },
//     },
//   },
// });
const episodeListStyle = {
  position: "relative",
  minWidth: "50rem",
  ml: "20%",
};

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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    if (show && !isCancelled) {
      setIsLoading(true);
      getEpisodes(show.feed)
        .then((data) => {
          setSelectedShow({ ...data.channel });
          setEpisodes([...data.channel.episodes]);
          // temp limiting data
          setFirstTenEpisodes([...data.channel.episodes].slice(0, 9));
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }
    // cleanup
    return () => {
      isCancelled = true;
    };
  }, [show]);

  if (isLoading) {
    return <div>Loading Episodes...</div>;
  }
  function playEpisodeHandler(episode) {
    setSelectedEpisodePlaying(episode);
  }
  function showEpisodeHandler() {
    if (selectedEpisode) {
      setSelectedEpisode(null);
    }
  }

  function showEpisodeModalHandler(episode) {
    setModalOpen(true);
    setSelectedEpisode(episode);
  }

  return (
    <Box sx={episodeListStyle}>
      <Box sx={{ width: "50rem" }}>
        <Typography gutterBottom variant="h3">
          {show.title}
        </Typography>
        <Typography gutterBottom variant="body2">
          {selectedShow.description}
        </Typography>
      </Box>
      <List sx={{ mt: 3 }} aria-label="episode list">
        {firstTenEpisodes.map((episode) => (
          <ListItem
            button
            sx={episodeListStyle}
            key={episode.guid.text}
            onClick={() => showEpisodeModalHandler(episode)}
            selected={
              episode &&
              selectedEpisodePlaying &&
              episode.guid.text === selectedEpisodePlaying.guid.text
            }
          >
            <ListItemIcon>
              <IconButton
                size="large"
                color="secondary"
                onClick={() => playEpisodeHandler(episode)}
              >
                <PlayCircleOutlineIcon fontSize="inherit" />
              </IconButton>
            </ListItemIcon>
            <ListItemText primary={episode.title} secondary={episode.pubDate} />
          </ListItem>
        ))}
      </List>
      {selectedEpisode && (
        <EpisodeModal
          episode={selectedEpisode}
          image={selectedShow.image}
          setSelectedEpisodePlaying={setSelectedEpisodePlaying}
          onClose={showEpisodeHandler}
          open={modalOpen}
        />
      )}
    </Box>
  );
}

export default EpisodeList;
