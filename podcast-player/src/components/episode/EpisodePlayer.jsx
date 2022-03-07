import React from "react";

function EpisodePlayer({ episode }) {
  // const { $length, $type, $url } = content;
  return (
    <div className="player">
      <audio
        controls
        src={episode.enclosure.$url}
        preload="metadata"
        autoPlay
      ></audio>
    </div>
  );
}

export default EpisodePlayer;