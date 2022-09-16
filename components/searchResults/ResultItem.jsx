import { Box, ListItemButton, Typography } from "@mui/material";

import Image from "next/image";

function ResultItem({ show }) {
  const thumbnail = show.podcast?.thumbnail
    ? show.podcast?.thumbnail
    : show.thumbnail;
  return (
    <ListItemButton
      role="link"
      component="li"
      onClick={() => console.log(show.id)}
      sx={{ pl: 0 }}
    >
      <Image src={thumbnail} alt={show.title} width={75} height={75} />

      <Box sx={{ width: "80%" }}>
        <Typography component="h1" sx={{ fontSize: "1rem", fontWeight: "600" }}>
          {show.title}
        </Typography>
        <Typography component="h2" sx={{ fontSize: ".8rem" }}>
          {show.pub_data_ms}
        </Typography>
      </Box>
    </ListItemButton>
  );
}
export default ResultItem;
