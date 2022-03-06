import React from "react";

function Show({ id, title, feed, selectShow }) {
  return (
    <li className="show-item">
      <h3>{title}</h3>
      <button onClick={() => selectShow(id)}>View Episodes</button>
    </li>
  );
}

export default Show;
