import React from "react";
import EpisodePlayer from "./episode/EpisodePlayer";

function Header({ selectedEpisodePlaying }) {
  return (
    <header className="header">
      <h1>Ultimate Podcasting</h1>
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
    </header>
  );
}

export default Header;
