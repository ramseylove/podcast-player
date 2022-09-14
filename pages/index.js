import { useEffect, useState } from "react";
import { search, topPodcasts } from "../utils/podcastApi";
// Components
import ShowList from "../components/show/ShowList";
import EpisodeList from "../components/episode/EpisodeList";
import Header from "../components/ui/header";
import Loader from "../components/ui/loader";
import {
  useFetchPodcasts,
  useFetchTopPodcasts,
} from "../hooks/useFetchPodcasts";

import PodcastList from "../components/podcastList/PodcastList";

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const [selectedEpisodePlaying, setSelectedEpisodePlaying] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState();
  const [results, setResults] = useState({ podcasts: [] });

  const [query, setQuery] = useState(null);

  const searchResults = useFetchPodcasts(["search", query], search, query);
  const topPodcastList = useFetchPodcasts(
    ["topPodcasts", { genre_id: 93 }],
    topPodcasts,
    {
      genre_id: 93,
    }
  );
  useEffect(() => {
    console.log(query);
    if (query && searchResults.data) {
      setResults((prev) => (prev.podcasts = searchResults.data.results));
    }

    if (!query && topPodcastList.data) {
      // console.log(topPodcastList);
      setResults((prev) => (prev.podcasts = topPodcastList.data.podcasts));
    }
  }, [query, searchResults, topPodcastList]);

  const handleSelectedShow = (showId) => {
    const show = shows.find((show) => show.id === showId);
    setSelectedShow(show);
  };
  return (
    <>
      <Header
        selectedEpisodePlaying={selectedEpisodePlaying}
        setSideBarOpen={setSideBarOpen}
        sideBarOpen={sideBarOpen}
        setSelectedEpisode={setSelectedEpisode}
        setQuery={setQuery}
      />

      {/* <ShowList
        shows={shows}
        selectedShow={selectedShow}
        handleSelectedShow={handleSelectedShow}
        sideBarOpen={sideBarOpen}
        setSideBarOpen={setSideBarOpen}
      /> */}
      {/* {query ? <SearchResults query={query} /> : null} */}
      {results ? <PodcastList podcasts={results} /> : null}
      {/* {isLoading || isFetching ? <Loader /> : null} */}
      {/* {selectedShow && (
        <EpisodeList
          show={selectedShow}
          handleSelectedShow={handleSelectedShow}
          selectedEpisodePlaying={selectedEpisodePlaying}
          setSelectedEpisodePlaying={setSelectedEpisodePlaying}
          setSelectedEpisode={setSelectedEpisode}
          selectedEpisode={selectedEpisode}
        />
      )} */}
    </>
  );
}

export default App;
