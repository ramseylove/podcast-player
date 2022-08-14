import { Box, Card, CardMedia, Link, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const PodcastPlayer = styled("audio")(({ theme }) => ({
  width: "100%",
  height: "2.0rem",
}));

export function EpisodeWrapper({ children }) {
  return (
    <Card
      sx={{
        p: ".3rem",
        width: {
          sm: "40rem",
        },
        backgroundColor: "primary.main",
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexBasis: "30rem",
        boxShadow: 0,
      }}
    >
      {children}
    </Card>
  );
}

export function EpisodePlayer({ episode, setSelectedEpisode }) {
  return (
    <>
      <Typography
        noWrap={true}
        sx={{ fontSize: ".9rem", fontWeight: "600", mb: ".4rem" }}
      >
        {episode.title}
      </Typography>
      <Typography sx={{ fontSize: ".7rem", fontWeight: "700", mb: ".4rem" }}>
        {episode.pubDate}
      </Typography>
      <Typography
        noWrap={true}
        sx={{ fontSize: ".7rem", mb: ".3rem", mr: "1rem" }}
      >
        {episode.description}
      </Typography>
      <Box sx={{ fontSize: ".6rem" }}>
        <Link
          onClick={() => setSelectedEpisode(episode)}
          color="primary.contrastText"
          sx={{
            fontWeight: "700",
            textDecoration: "underline solid",
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
    </>
  );
}
