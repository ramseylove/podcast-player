import React from "react";
import ReactDOM from "react-dom";

import { ReactComponent as PlayButton } from "../../assets/SVG/play2.svg";
import { ReactComponent as CloseButton } from "../../assets/SVG/cross.svg";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onConfirm} />;
};

const ModalOverlay = ({ episode, setSelectedEpisodePlaying, onConfirm }) => {
  return (
    <div className="episode-modal">
      <button className="modal-close" onClick={onConfirm}>
        <CloseButton />
      </button>

      <div className="modal-image-container">
        <img src="https://www.fillmurray.com/480/480" alt="Fill Murray" />
      </div>
      <div className="controls">
        <button
          className="play-button"
          onClick={() => setSelectedEpisodePlaying(episode)}
        >
          <PlayButton />
          <span>Play Episode</span>
        </button>
      </div>
      <div className="modal-info">
        <div className="modal-title">
          <h3>{episode.title}</h3>
        </div>
        <p className="modal-pubDate">{episode.pubDate}</p>
        <p className="modal-description">{episode.description}</p>
      </div>
    </div>
  );
};

function EpisodeModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onConfirm={props.onConfirm}
          episode={props.episode}
          setSelectedEpisodePlaying={props.setSelectedEpisodePlaying}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default EpisodeModal;
