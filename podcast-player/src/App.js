import { useEffect, useState } from "react";
import ShowList from "./components/show/ShowList";
import EpisodeList from "./components/episode/EpisodeList";
import Header from "./components/header";

const PODCASTS = [
  {
    id: "the-daily",
    title: "The Daily",
    feed: "https://feeds.simplecast.com/54nAGcIl",
  },
  {
    id: "crime-junkie",
    title: "Crime Junkie",
    feed: "https://feeds.simplecast.com/qm_9xx0g",
  },
  {
    id: "apology-line",
    title: "The Apology Line",
    feed: "https://rss.art19.com/apology-line",
  },
  {
    id: "working-it-out",
    title: "Mike Birbiglia's Working It Out",
    feed: "https://workingitout.libsyn.com/rss",
  },
];

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState({});
  const [selectedEpisodePlaying, setSelectedEpisodePlaying] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!PODCASTS) {
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
    }
    setShows(PODCASTS);
    setIsLoading(false);
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
      <Header
        selectedEpisodePlaying={selectedEpisodePlaying}
        setSideBarOpen={setSideBarOpen}
        sideBarOpen={sideBarOpen}
      />
      <div className="App">
        <ShowList
          shows={shows}
          selectShow={setSelectedShow}
          sideBarOpen={sideBarOpen}
          setSideBarOpen={setSideBarOpen}
        />
        {selectedShow && show && (
          <EpisodeList
            show={show}
            selectedEpisodePlaying={selectedEpisodePlaying}
            setSelectedEpisodePlaying={setSelectedEpisodePlaying}
          />
        )}
      </div>
    </>
  );
}

export default App;
