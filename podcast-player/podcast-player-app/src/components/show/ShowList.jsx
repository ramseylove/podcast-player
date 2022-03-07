import React from "react";
import Show from "./Show";

function ShowList({ shows, selectShow }) {
  return (
    <div className="show-list">
      <h3>Available Shows</h3>
      {shows.map((show) => (
        <Show
          key={show.id}
          id={show.id}
          title={show.title}
          feed={show.feed}
          selectShow={selectShow}
        />
      ))}
    </div>
  );
}

export default ShowList;
