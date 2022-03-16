import ArrowRight from "@mui/icons-material/ArrowRight";
import { ListItemButton } from "@mui/material";

function Show({ id, title, selectShow, selectedShow, setSideBarOpen }) {
  function selectShowHandler(id) {
    selectShow(id);
    setSideBarOpen(false);
  }
  return (
    <ListItemButton
      role={"link"}
      component={"li"}
      onClick={() => selectShowHandler(id)}
      selected={selectedShow === id}
      sx={{ pl: ".2rem", pr: "2rem" }}
    >
      <ArrowRight fontSize="large" />
      {title}
    </ListItemButton>
  );
}

export default Show;
