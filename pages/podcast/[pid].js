import React from "react";
import { EpisodeList } from "../../components/episode/EpisodeList";

function PodcastPage({ podcast }) {
  return <div>{podcast.title}</div>;
}

export default PodcastPage;
