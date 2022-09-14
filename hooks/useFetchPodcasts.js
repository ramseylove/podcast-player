import { useQuery } from "@tanstack/react-query";

import { search, topPodcasts } from "../utils/podcastApi";

export const useFetchPodcasts = (keyArr, func, params) => {
  return useQuery([...keyArr], () => func(params), {
    refetchOnWindowFocus: false,
  });
};

export const useFetchTopPodcasts = (params) => {
  return useQuery(
    [`topTen_${params.genre_id}`, params.genre_id],
    () => topPodcasts(params),
    {
      refetchOnWindowFocus: false,
    }
  );
};
