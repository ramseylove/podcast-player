import React, { useState } from "react";
import { useEffect } from "react";
import { getEpisodes } from "../../utils/api-utils";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, CardActions } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

import EpisodeModal from "./EpisodeModal";

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
  function showEpisodeHandler(episode) {
    if (selectedEpisode) {
      setSelectedEpisode(null);
    }
  }

  function showEpisodeModalHandler(episode) {
    setModalOpen(true);
    setSelectedEpisode(episode);
  }

  return (
    <Box>
      <Box sx={{ minWidth: "60%", ml: 5 }}>
        <Typography gutterBottom variant="h3">
          {show.title}
        </Typography>
        <Typography gutterBottom variant="body2">
          {selectedShow.description}
        </Typography>
        <Box sx={{ mt: 3 }}>
          {firstTenEpisodes.map((episode) => (
            <Card
              key={episode.guid.text}
              onClick={() => showEpisodeModalHandler(episode)}
              disableRipple
            >
              <Box sx={{ display: "flex" }}>
                <CardActions>
                  <IconButton
                    size="large"
                    color="secondary"
                    onClick={() => setSelectedEpisodePlaying(episode)}
                  >
                    <PlayCircleOutlineIcon fontSize="inherit" />
                  </IconButton>
                </CardActions>
                <CardActionArea>
                  <Typography variant="h6" component="div">
                    {episode.title}
                  </Typography>
                  <Typography variant="subtitle1">{episode.pubDate}</Typography>
                </CardActionArea>
              </Box>
            </Card>
          ))}
        </Box>
        <div>
          {selectedEpisode && (
            <EpisodeModal
              episode={selectedEpisode}
              image={selectedShow.image}
              setSelectedEpisodePlaying={setSelectedEpisodePlaying}
              onClose={showEpisodeHandler}
              open={modalOpen}
            />
          )}
        </div>
      </Box>
    </Box>
  );
}

export default EpisodeList;
