import React from "react";

const SearchResults = ({ results }) => {
  return (
    <ul>
      {results.map((result) => (
        <li key={result.id}>{result.title_original}</li>
      ))}
    </ul>
  );
};

export default SearchResults;
