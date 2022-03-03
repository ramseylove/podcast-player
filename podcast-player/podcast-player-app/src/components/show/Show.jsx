import React from "react";

function Show({ id, title, feed, selectShow }) {
  return (
    <li>
      <h3>{title}</h3>
      <p>{feed}</p>
      <button onClick={() => selectShow(id)}>View</button>
    </li>
  );
}

export default Show;
