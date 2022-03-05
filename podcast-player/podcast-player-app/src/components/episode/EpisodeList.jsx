import React, { useState } from "react";
import { useEffect } from "react";
import { getEpisodes } from "../../utils/api-utils";

function EpisodeList({ show }) {
  const [episodes, setEpisodes] = useState([]);
  const [selectedShow, setSelectedShow] = useState({});
  const [selectedEpisode, setSelectedEpisode] = useState({});
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
    return <div>Loading Episodes....</div>;
  }

  return (
    <div>
      {/* TODO: handle selectedEpisode */}
      <h3>{show.title}</h3>
      <p>{selectedShow.description}</p>
      <ul>
        {firstTenEpisodes.map((episode) => (
          <li key={episode.guid["#text"]}>
            {episode.title}
            <button type="button" onClick={() => setSelectedEpisode(episode)}>
              View
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EpisodeList;
