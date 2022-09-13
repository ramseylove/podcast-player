import { useQuery } from "@tanstack/react-query";

import { searchPodcasts, topTen } from "../utils/api-utils";

export const useFetchPodcasts = (search) => {
  return useQuery(["podcasts", search], () => searchPodcasts(search), {
    refetchOnWindowFocus: false,
  });
};

export const useFetchTopPodcasts = (genre_id = 93) => {
  return useQuery([`topTen_${genre_id}`, genre_id], () => topTen(genre_id), {
    refetchOnWindowFocus: false,
  });
};
