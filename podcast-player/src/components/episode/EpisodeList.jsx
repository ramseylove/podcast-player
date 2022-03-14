import React, { useState } from "react";
import { useEffect } from "react";
import { getEpisodes } from "../../utils/api-utils";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

import EpisodeModal from "./EpisodeModal";

function EpisodeList({
  show,
  selectedEpisodePlaying,
  setSelectedEpisodePlaying,
}) {
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
    // if (
    //   selectedEpisodePlaying &&
    //   selectedEpisodePlaying.guid["#text"] === episode.guid["#text"]
    // ) {
    // }
  }

  let episodeClass = "episode-list";
  function handleSelectedEpisode(event, episode) {
    if (
      selectedEpisodePlaying &&
      selectedEpisodePlaying.guid["#text"] === episode.guid["#text"]
    ) {
      episodeClass = "episode-list active";
      setSelectedEpisode(episode);
    }
  }

  return (
    <div className="right-pane">
      <div className="episode-list-container">
        <h2>{show.title}</h2>
        <p className="show-description">{selectedShow.description}</p>
        <div className={episodeClass}>
          {firstTenEpisodes.map((episode) => (
            <Card className="episode-item-wrapper" key={episode.guid.text}>
              <IconButton
                size="large"
                color="secondary"
                onClick={() => setSelectedEpisodePlaying(episode)}
              >
                <PlayCircleOutlineIcon fontSize="inherit" />
              </IconButton>

              <CardActionArea onClick={() => setSelectedEpisode(episode)}>
                <div className="episode-item-details">{episode.title}</div>
                <div className="episode-pubdate">{episode.pubDate}</div>
              </CardActionArea>
            </Card>
          ))}
        </div>
        <div>
          {selectedEpisode && (
            <EpisodeModal
              episode={selectedEpisode}
              image={selectedShow.image}
              setSelectedEpisodePlaying={setSelectedEpisodePlaying}
              onConfirm={showEpisodeHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default EpisodeList;
