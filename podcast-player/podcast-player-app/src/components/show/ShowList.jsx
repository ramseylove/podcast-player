import React from "react";
import Show from "./Show";

function ShowList({ shows, selectShow }) {
  return (
    <ul className="show-list">
      {shows.map((show) => (
        <Show
          key={show.id}
          id={show.id}
          title={show.title}
          feed={show.feed}
          selectShow={selectShow}
        />
      ))}
    </ul>
  );
}

export default ShowList;
