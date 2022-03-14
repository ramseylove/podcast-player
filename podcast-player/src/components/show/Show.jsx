import ArrowRight from "@mui/icons-material/ArrowRight";
import ListItem from "@mui/material/ListItem";
function Show({ id, title, selectShow, setSideBarOpen }) {
  function selectShowHandler(id) {
    selectShow(id);
    setSideBarOpen(false);
  }
  return (
    <ListItem button onClick={() => selectShowHandler(id)}>
      {title}
      <ArrowRight fontSize="large" />
    </ListItem>
  );
}

export default Show;
