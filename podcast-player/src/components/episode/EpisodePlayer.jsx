import React from "react";

import { Box, Card, CardMedia, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const PodcastPlayer = styled("audio")(({ theme }) => ({
  width: "100%",
  height: "2.0rem",
}));

function EpisodePlayer({ episode, setSelectedEpisode }) {
  return (
    <Card
      sx={{
        p: ".3rem",
        width: {
          sm: "40rem",
        },
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#88737a",
        color: "primary.contrastText",
      }}
    >
      <Box sx={{ fontSize: ".9rem", fontWeight: "600", mb: ".4rem" }}>
        {episode.title}
      </Box>
      <Box sx={{ fontSize: ".7rem", fontWeight: "700", mb: ".4rem" }}>
        {episode.pubDate}
      </Box>
      <Typography
        noWrap={true}
        sx={{ fontSize: ".7rem", mb: ".3rem", mr: "1rem" }}
      >
        {episode.description}
      </Typography>
      <Box sx={{ fontSize: ".6rem" }}>
        <Link
          onClick={() => setSelectedEpisode(episode)}
          sx={{
            fontWeight: "700",
            color: "primary.contrastText",
            textDecoration: "underline solid white",
            cursor: "pointer",
          }}
        >
          Read More
        </Link>
      </Box>
      <CardMedia sx={{ mt: ".3rem", mb: 0 }}>
        <PodcastPlayer
          controls
          src={episode.enclosure.url}
          preload="metadata"
          autoPlay
        ></PodcastPlayer>
      </CardMedia>
    </Card>
  );
}

export default EpisodePlayer;
