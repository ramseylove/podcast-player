import ArrowRight from "@mui/icons-material/ArrowRight";
import ListItem from "@mui/material/ListItem";
function Show({ id, title, selectShow, selectedShow, setSideBarOpen }) {
  function selectShowHandler(id) {
    selectShow(id);
    setSideBarOpen(false);
  }
  return (
    <ListItem
      button
      onClick={() => selectShowHandler(id)}
      selected={selectedShow === id}
    >
      {title}
      <ArrowRight fontSize="large" />
    </ListItem>
  );
}

export default Show;
