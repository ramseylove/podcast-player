import React from "react";

import {
  Box,
  IconButton,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

function EpisodeItem({
  episode,
  selectedEpisodePlaying,
  showEpisodeModalHandler,
  playEpisodeHandler,
}) {
  return (
    <ListItemButton
      role={"link"}
      component={"li"}
      key={episode.guid.text}
      onClick={() => showEpisodeModalHandler(episode)}
      selected={
        episode &&
        selectedEpisodePlaying &&
        episode.guid.text === selectedEpisodePlaying.guid.text
      }
    >
      <ListItemIcon role={"play"}>
        <IconButton
          size="large"
          color="secondary"
          onClick={() => playEpisodeHandler(episode)}
        >
          <PlayCircleOutlineIcon fontSize="inherit" />
        </IconButton>
      </ListItemIcon>

      <Box sx={{ width: "80%" }}>
        <Typography noWrap="true" variant="subtitle1" component="h1">
          {episode.title}
        </Typography>
        <Typography variant="subtitle2">{episode.pubDate}</Typography>
      </Box>
    </ListItemButton>
  );
}

export default EpisodeItem;
