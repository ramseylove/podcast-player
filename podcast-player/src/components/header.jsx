import React from "react";
import EpisodePlayer from "./episode/EpisodePlayer";

function Header({ selectedEpisodePlaying }) {
  return (
    <div className="header">
      <h3>Ultimate Podcasting</h3>
      {selectedEpisodePlaying && (
        <div className="player-container">
          <div className="player-info">
            <p className="player-title">{selectedEpisodePlaying.title}</p>
            <p className="player-pubdate">{selectedEpisodePlaying.pubDate}</p>
            <p className="player-description">
              {selectedEpisodePlaying.description}
            </p>
          </div>
          <EpisodePlayer episode={selectedEpisodePlaying} />
        </div>
      )}
    </div>
  );
}

export default Header;
