import { useQuery } from "@tanstack/react-query";

import { searchPodcasts } from "../utils/api-utils";

export const useFetchPodcasts = (search) => {
  return useQuery(["podcasts", search], () => searchPodcasts(search));
};
