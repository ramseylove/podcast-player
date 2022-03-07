import React from "react";

import { ReactComponent as PlayButton } from "../../assets/SVG/circle-right.svg";

function Show({ id, title, selectShow }) {
  return (
    <button className="show-item" onClick={() => selectShow(id)}>
      {title}
      <PlayButton />
    </button>
  );
}

export default Show;
