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
      role="link"
      component="li"
      onClick={() => showEpisodeModalHandler(episode)}
      sx={{ pl: 0 }}
      selected={
        episode &&
        selectedEpisodePlaying &&
        episode.guid.text === selectedEpisodePlaying.guid.text
      }
    >
      <ListItemIcon role={"play"}>
        <IconButton
          color="secondary"
          onClick={() => playEpisodeHandler(episode)}
        >
          <PlayCircleOutlineIcon sx={{ fontSize: 34 }} />
        </IconButton>
      </ListItemIcon>

      <Box sx={{ width: "80%" }}>
        <Typography component="h1" sx={{ fontSize: "1rem", fontWeight: "600" }}>
          {episode.title}
        </Typography>
        <Typography component="h2" sx={{ fontSize: ".8rem" }}>
          {episode.pubDate}
        </Typography>
      </Box>
    </ListItemButton>
  );
}

export default EpisodeItem;
