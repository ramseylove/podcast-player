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
        flexGrow: 1,
        bgcolor: "primary.main",
      }}
    >
      <AppBar position="static">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            height: "8rem",
          }}
        >
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
            <Box
              sx={{
                width: "40rem",
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div className="player-info">
                <p className="player-title">{selectedEpisodePlaying.title}</p>
                <p className="player-pubdate">
                  {selectedEpisodePlaying.pubDate}
                </p>
                <p className="player-description">
                  {selectedEpisodePlaying.description}
                </p>
              </div>
              <EpisodePlayer episode={selectedEpisodePlaying} />
            </Box>
          )}
        </Box>
      </AppBar>
    </Box>
  );
}

export default Header;
