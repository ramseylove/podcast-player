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
    <AppBar
      position="sticky"
      sx={{
        flexGrow: 1,
        bgcolor: "primary.main",
      }}
    >
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
          <EpisodePlayer episode={selectedEpisodePlaying} />
        )}
      </Box>
    </AppBar>
  );
}

export default Header;
