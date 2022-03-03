import React from "react";

function EpisodePlayer({ content }) {
  return (
    <div>
      <audio controls src={content}></audio>
    </div>
  );
}

export default EpisodePlayer;
