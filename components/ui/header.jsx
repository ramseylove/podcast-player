import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

import { EpisodePlayer, EpisodeWrapper } from "../episode/EpisodePlayer";
import SearchBar from "./SearchBar";

function Header({
  selectedEpisodePlaying,
  setSideBarOpen,
  sideBarOpen,
  setSelectedEpisode,
  setQuery,
}) {
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
            color="inherit"
            aria-label="open navigation"
            onClick={toggleDrawer(true)}
            edge="start"
            sx={{ mr: 2, ml: 1 }}
          >
            <MenuIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <Typography variant="h5" component="h1">
            Ultimate Podcasting
          </Typography>
        </Toolbar>

        <SearchBar setQuery={setQuery} />

        <EpisodeWrapper>
          {selectedEpisodePlaying && (
            <EpisodePlayer
              episode={selectedEpisodePlaying}
              setSelectedEpisode={setSelectedEpisode}
            />
          )}
        </EpisodeWrapper>
      </AppBar>
    </Box>
  );
}

export default Header;
