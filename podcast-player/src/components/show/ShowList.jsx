import React from "react";
import { IconButton, List, Drawer, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Show from "./Show";
import ClearIcon from "@mui/icons-material/Clear";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));

function ShowList({
  shows,
  handleSelectedShow,
  selectedShow,
  sideBarOpen,
  setSideBarOpen,
}) {
  return (
    <>
      <Drawer
        variant="temporary"
        open={sideBarOpen}
        anchor={"left"}
        ModalProps={{ keepMounted: true }}
        sx={{ width: 28, flexShrink: 0, bgcolor: "primary.light" }}
        aria-label={"Navigation drawer"}
      >
        <DrawerHeader>
          <Typography variant="h5" component="h1">
            Podcasts
          </Typography>
          <IconButton size="large" onClick={() => setSideBarOpen(false)}>
            <ClearIcon fontSize="inherit" sx={{ color: "primary.dark" }} />
          </IconButton>
        </DrawerHeader>
        <List>
          {shows.map((show) => (
            <Show
              key={show.id}
              id={show.id}
              title={show.title}
              feed={show.feed}
              handleSelectedShow={handleSelectedShow}
              selectedShow={selectedShow}
              setSideBarOpen={setSideBarOpen}
            />
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default ShowList;
