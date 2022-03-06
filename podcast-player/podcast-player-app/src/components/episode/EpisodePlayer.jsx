import React from "react";

function EpisodePlayer({ content }) {
  const { $length, $type, $url } = content;
  return (
    <audio controls className="player" src={$url} preload="metadata"></audio>
  );
}

export default EpisodePlayer;
