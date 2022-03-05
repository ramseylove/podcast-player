import React from "react";
import EpisodePlayer from "./EpisodePlayer";

function EpisodeDetails({ episode }) {
  return (
    <div>
      <div className="episode-container">
        <div className="podcast-image">
          <img src="https://www.fillmurray.com/480/480" alt="Fill Murray" />
        </div>

        <div className="episode-info">
          <div className="player-container">
            <EpisodePlayer content={episode.enclosure} />
          </div>
          <h2 className="episodeTitle">{episode.title}</h2>
          <p className="pubDate">{episode.pubDate}</p>
        </div>
      </div>
      <p className="episodeDescription">{episode.description}</p>
    </div>
  );
}

export default EpisodeDetails;
