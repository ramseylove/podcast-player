import { useEffect, useState } from "react";

// Components
import ShowList from "../components/show/ShowList";
import EpisodeList from "../components/episode/EpisodeList";
import Header from "../components/ui/header";
import Loader from "../components/ui/loader";
import { useFetchPodcasts } from "../hooks/useFetchPodcasts";
import SearchResults from "../components/searchResults/SearchResults";

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const [selectedEpisodePlaying, setSelectedEpisodePlaying] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState();
  // const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

  const { data, isLoading, isFetching, error } = useFetchPodcasts(query);

  console.log(data);
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

      <ShowList
        shows={shows}
        selectedShow={selectedShow}
        handleSelectedShow={handleSelectedShow}
        sideBarOpen={sideBarOpen}
        setSideBarOpen={setSideBarOpen}
      />
      {data && data.results ? <SearchResults results={data.results} /> : null}
      {isLoading || isFetching ? <Loader /> : null}
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
