import React, { useState } from "react";
import { useEffect } from "react";
import { getEpisodes } from "../../utils/api-utils";

import EpisodeDetails from "./EpisodeDetails";
import EpisodePlayer from "./EpisodePlayer";

function EpisodeList({
  show,
  selectedEpisodePlaying,
  setSelectedEpisodePlaying,
}) {
  const [episodes, setEpisodes] = useState([]);
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

  return (
    <div className="right-pane">
      <div className="episode-list-container">
        {/* TODO: handle selectedEpisode */}
        <h2>{show.title}</h2>
        <p>{selectedShow.description}</p>
        <div className="episode-list">
          {firstTenEpisodes.map((episode) => (
            <button
              className="episode-item"
              key={episode.guid["#text"]}
              onClick={() => setSelectedEpisode(episode)}
            >
              {episode.title}
            </button>
          ))}
        </div>
        <div>
          {selectedEpisode && (
            <EpisodeDetails
              episode={selectedEpisode}
              setSelectedEpisodePlaying={setSelectedEpisodePlaying}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default EpisodeList;
