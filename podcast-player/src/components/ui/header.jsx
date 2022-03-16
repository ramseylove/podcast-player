import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

import EpisodePlayer from "../episode/EpisodePlayer";

function Header({ selectedEpisodePlaying, setSideBarOpen, sideBarOpen }) {
  const toggleDrawer = (sideBarOpen) => (event) => {
    setSideBarOpen(sideBarOpen);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        sx={{
          flexGrow: 1,
          height: {
            xs: "auto",
            sm: "8rem",
          },
          bgcolor: "primary.main",
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          justifyContent: "space-between",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            color="inherit"
            aria-label="open navigation"
            onClick={toggleDrawer(true)}
            edge="start"
            sx={{ mr: 2, ml: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="h1">
            Ultimate Podcasting
          </Typography>
        </Toolbar>
        {selectedEpisodePlaying && (
          <EpisodePlayer episode={selectedEpisodePlaying} />
        )}
      </AppBar>
    </Box>
  );
}

export default Header;
