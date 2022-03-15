import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import React from "react";
import Show from "./Show";

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
      >
        <DrawerHeader>
          <h3>Your Shows</h3>
          <Button onClick={() => setSideBarOpen(false)}>Close</Button>
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
