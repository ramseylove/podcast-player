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
    >
      {title}
      <ArrowRight fontSize="large" />
    </ListItemButton>
  );
}

export default Show;
