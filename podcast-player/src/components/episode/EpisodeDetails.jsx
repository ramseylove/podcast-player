import React from "react";
import { ReactComponent as PlayButton } from "../../assets/SVG/play2.svg";

function EpisodeDetails({ episode, setSelectedEpisodePlaying }) {
  return (
    <div className="episode-content">
      <div className="podcast-image">
        <img src="https://www.fillmurray.com/480/480" alt="Fill Murray" />
      </div>

      <div className="episode-info">
        <button
          className="play-button"
          onClick={() => setSelectedEpisodePlaying(episode)}
        >
          <PlayButton />
        </button>
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
