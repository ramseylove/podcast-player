import { IconButton, List, Drawer, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import Show from "./Show";
import ArrowLeft from "@mui/icons-material/ArrowLeft";

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
  selectShow,
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
          <IconButton
            size="large"
            color="secondary"
            onClick={() => setSideBarOpen(false)}
          >
            <ArrowLeft fontSize="inherit" />
          </IconButton>
        </DrawerHeader>
        <List>
          {shows.map((show) => (
            <Show
              key={show.id}
              id={show.id}
              title={show.title}
              feed={show.feed}
              selectShow={selectShow}
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
