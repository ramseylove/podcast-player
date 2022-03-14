import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Image from "@jy95/material-ui-image";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  height: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflowY: "scroll",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

function EpisodeModal({
  episode,
  image,
  setSelectedEpisodePlaying,
  open,
  onClose,
}) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby={episode.title}
      aria-describedby={episode.description}
    >
      <Box sx={modalStyle}>
        <Box sx={{ position: "absolute", top: ".75rem", right: ".75rem" }}>
          <IconButton onClick={onClose} size="large">
            <ClearIcon color="primary" fontSize="large" />
          </IconButton>
        </Box>

        <Box sx={{ width: "15rem", boxShadow: 6, mb: 2 }}>
          <Image src={image.url} alt={image.title} />
        </Box>
        <Box sx={{ mb: 4 }}>
          <Button onClick={() => setSelectedEpisodePlaying(episode)}>
            <PlayCircleOutlineIcon fontSize="large" />
            <Typography component="span">Play Episode</Typography>
          </Button>
        </Box>
        <Box>
          <Typography variant="h5">{episode.title}</Typography>
          <Typography variant="subtitle1" gutterBottom>
            {episode.pubDate}
          </Typography>
          <Typography variant="body1">{episode.description}</Typography>
        </Box>
      </Box>
    </Modal>
  );
}

export default EpisodeModal;
