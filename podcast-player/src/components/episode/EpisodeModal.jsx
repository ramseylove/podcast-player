import { Box, Button, Container, Modal, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Image from "@jy95/material-ui-image";

const style = {
  position: "absolute",
  height: "80%",
  overflowY: "scroll",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: { xs: 300, sm: 600 },
};

function EpisodeModal({
  episode,
  image,
  setSelectedEpisodePlaying,
  open,
  onClose,
}) {
  const handlePlayingEpisode = (episode) => {
    setSelectedEpisodePlaying(episode);
    onClose();
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      role={"dialog"}
      aria-labelledby="dialogTitle"
    >
      <Container maxWidth={"sm"} sx={style}>
        <Box sx={{ position: "absolute", top: ".75rem", right: ".75rem" }}>
          <IconButton onClick={onClose} size="large" aria-label="Close">
            <ClearIcon color="primary" fontSize="large" />
          </IconButton>
        </Box>

        <Box sx={{ width: { xs: "8rem", sm: "15rem" }, boxShadow: 6, mb: 2 }}>
          <Image src={image.url} alt={image.title} />
        </Box>
        <Box sx={{ mb: 4 }}>
          <Button onClick={() => handlePlayingEpisode(episode)}>
            <PlayCircleOutlineIcon fontSize="large" />
            <Typography component="span" role="presentation">
              Play Episode
            </Typography>
          </Button>
        </Box>
        <Typography
          variant="h6"
          component="h1"
          aria-label={episode.title}
          id="dialogTitle"
        >
          {episode.title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {episode.pubDate}
        </Typography>
        <Typography
          paragraph={true}
          variant="body1"
          aria-label={episode.description}
          id="dialogDescription"
        >
          {episode.description}
        </Typography>
      </Container>
    </Modal>
  );
}

export default EpisodeModal;
