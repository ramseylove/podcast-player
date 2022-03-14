import React from "react";
import EpisodePlayer from "./episode/EpisodePlayer";

import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { AppBar, Box, Toolbar } from "@mui/material";

function Header({ selectedEpisodePlaying, setSideBarOpen, sideBarOpen }) {
  const toggleDrawer = (sideBarOpen) => (event) => {
    setSideBarOpen(sideBarOpen);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        bgcolor: "primary.main",
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            color="inherit"
            aria-label="open sidebar"
            onClick={toggleDrawer(true)}
            edge="start"
            sx={{ mr: 2, ml: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <h1>Ultimate Podcasting</h1>
        </Toolbar>
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
      </AppBar>
    </Box>
  );
}

export default Header;
