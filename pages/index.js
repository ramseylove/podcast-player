import { useEffect, useState } from "react";
import { getTodos, search, topPodcasts } from "../utils/podcastApi";
// Components
import MainToolbar from "../components/MainToolbar/MainToolbar";
import SearchBar from "../components/ui/SearchBar";
import {
  EpisodePlayer,
  EpisodeWrapper,
} from "../components/episode/EpisodePlayer";
import SearchResults from "../components/searchResults/SearchResults";
import ShowList from "../components/show/ShowList";
import Header from "../components/ui/header";
import Loader from "../components/ui/loader";

import {
  useFetchPodcasts,
  useFetchTopPodcasts,
} from "../hooks/useFetchPodcasts";

// import PodcastList from "../components/podcastList/PodcastList";
import Link from "next/link";

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const [selectedEpisodePlaying, setSelectedEpisodePlaying] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

  const [query, setQuery] = useState(null);

  const searchResults = useFetchPodcasts(["search", query], search, query);
  const topPodcastList = useFetchPodcasts(
    ["topPodcasts", { genre_id: 93 }],
    topPodcasts,
    {
      genre_id: 93,
    }
  );

  const showTopOrSearch = () => {
    if (query && searchResults.data) {
      return <SearchResults results={searchResults.data} />;
    }
    if (!query && topPodcastList.data) {
      return <SearchResults results={topPodcastList.data} />;
    }

    return null;
  };

  const handleSelectedShow = (showId) => {
    const show = shows.find((show) => show.id === showId);
    setSelectedShow(show);
  };
  return (
    <>
      <Header>
        <MainToolbar
          setSideBarOpen={setSideBarOpen}
          sideBarOpen={sideBarOpen}
        />
        <SearchBar setQuery={setQuery} />
        <EpisodeWrapper>
          {selectedEpisodePlaying && (
            <EpisodePlayer
              episode={selectedEpisodePlaying}
              setSelectedEpisode={setSelectedEpisode}
            />
          )}
        </EpisodeWrapper>
      </Header>

      <ShowList
        shows={shows}
        selectedShow={selectedShow}
        handleSelectedShow={handleSelectedShow}
        sideBarOpen={sideBarOpen}
        setSideBarOpen={setSideBarOpen}
      />
      {showTopOrSearch()}

      {topPodcastList.isLoading ||
      topPodcastList.isFetching ||
      searchResults.isLoading ||
      searchResults.isFetching ? (
        <Loader />
      ) : null}
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
