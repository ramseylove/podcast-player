import React from "react";
import EpisodePlayer from "./EpisodePlayer";

function EpisodeDetails({ episode }) {
  return (
    <div className="episode-content">
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

      <div className="episode-description">
        <p className="episodeDescription">{episode.description}</p>
      </div>
    </div>
  );
}

export default EpisodeDetails;
