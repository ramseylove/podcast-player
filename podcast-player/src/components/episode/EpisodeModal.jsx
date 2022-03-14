import ReactDOM from "react-dom";

import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onConfirm} />;
};

const ModalOverlay = ({
  episode,
  image,
  setSelectedEpisodePlaying,
  onConfirm,
}) => {
  return (
    <div className="episode-modal">
      <div className="modal-close">
        <IconButton onClick={onConfirm}>
          <ClearIcon color="primary" fontSize="large" />
        </IconButton>
      </div>

      <div className="modal-image-container">
        <img src={image.url} alt={image.title} />
      </div>
      <div className="controls">
        <button
          className="play-button"
          onClick={() => setSelectedEpisodePlaying(episode)}
        >
          <PlayCircleOutlineIcon fontSize="large" />
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
          image={props.image}
          setSelectedEpisodePlaying={props.setSelectedEpisodePlaying}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default EpisodeModal;
