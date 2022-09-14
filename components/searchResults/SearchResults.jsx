import React from "react";
import { useFetchPodcasts } from "../../hooks/useFetchPodcasts";

// Components
import Loader from "../ui/loader";

const SearchResults = ({ query }) => {
  const { data, isLoading, isFetching, error } = useFetchPodcasts(query);

  return (
    <>
      <ul>
        {data?.results.map((result) => (
          <li key={result.id}>{result.title_original}</li>
        ))}
      </ul>
      {isLoading || isFetching ? <Loader /> : null}
    </>
  );
};

export default SearchResults;
