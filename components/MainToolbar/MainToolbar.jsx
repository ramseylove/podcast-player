import { Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const MainToolbar = ({ sideBarOpen, setSideBarOpen }) => {
  const toggleDrawer = (sideBarOpen) => (event) => {
    setSideBarOpen(sideBarOpen);
  };
  return (
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
  );
};

export default MainToolbar;
