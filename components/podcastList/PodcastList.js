import React from "react";

const podcastList = ({ podcasts }) => {
  return (
    <ul>
      {podcasts.map((result) => (
        <li key={result.id}>{result.title}</li>
      ))}
    </ul>
  );
};

export default podcastList;
