// import { getShows } from "./utils/api-utils";

import { useEffect, useState } from "react";
import ShowList from "./components/show/ShowList";
import EpisodeList from "./components/episode/EpisodeList";
import Header from "./components/header";

function App() {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState({});
  const [selectedEpisodePlaying, setSelectedEpisodePlaying] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getShows() {
      const url = "http://localhost:3500/podcasts";
      const res = await fetch(url);

      const data = await res.json();

      if (data) {
        setShows(data);
        setIsLoading(false);
      }
    }

    getShows();
  }, []);

  if (isLoading) {
    return <div>Loading Shows</div>;
  }

  function handleSelectShow(id) {
    if (shows && !isLoading) {
      return shows[id];
    }
  }
  let show;
  if (selectedShow) {
    show = shows.find((show) => show.id === selectedShow);
  }
  return (
    <>
      <Header selectedEpisodePlaying={selectedEpisodePlaying} />
      <div className="App">
        <div className="show-list-container">
          <ShowList shows={shows} selectShow={setSelectedShow} />
        </div>
        {selectedShow && show && (
          <div className="episodelist">
            <EpisodeList
              show={show}
              selectedEpisodePlaying={selectedEpisodePlaying}
              setSelectedEpisodePlaying={setSelectedEpisodePlaying}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
