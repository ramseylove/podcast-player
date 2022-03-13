import React from "react";

import ArrowRight from "@mui/icons-material/ArrowRight";
function Show({ id, title, selectShow }) {
  return (
    <button className="show-item" onClick={() => selectShow(id)}>
      {title}
      <ArrowRight />
    </button>
  );
}

export default Show;
