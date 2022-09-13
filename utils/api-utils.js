import Axios from "axios";
import { removeHtml, parseDate } from "./utils";
import { parse } from "arraybuffer-xml-parser";
export async function getShows() {
  const url = "http://localhost:3500/podcasts";
  const res = await fetch(url);

  const data = await res.json();

  return data;
}

export async function getEpisodes(url) {
  const res = await fetch(url);

  const data = await res.text();

  const parsedXml = parse(data);

  const cleanedEpisodes = parsedXml.rss.channel.item.map((item) => {
    const pubDate = item.pubDate ? parseDate(item.pubDate) : null;
    return {
      author: item.author,
      description: removeHtml(item.description),
      title: item.title,
      guid: {
        text: item.guid["#text"],
        isPermaLink: item.guid.$isPermaLink,
      },
      pubDate: pubDate,
      enclosure: {
        length: item.enclosure.$length,
        type: item.enclosure.$type,
        url: item.enclosure.$url,
      },
    };
  });

  const cleanedXML = {
    channel: {
      copyright: parsedXml.rss.channel.copyright,
      description: removeHtml(parsedXml.rss.channel.description),
      image: { ...parsedXml.rss.channel.image },
      episodes: cleanedEpisodes,
      pubDate: parsedXml.rss.channel.pubDate,
      title: parsedXml.rss.channel.title,
    },
  };

  return cleanedXML;
}

let apiHeaders;
let BASE_API_URL;
const apiProxy = "http://localhost:9999/";

if (process.env.NEXT_PUBLIC_ENVIRONMENT === "development") {
  apiHeaders = {
    "X-Requested-With": "localhost",
  };
  BASE_API_URL = apiProxy + "https://listen-api-test.listennotes.com/api/v2";
}

if (process.env.NEXT_PUBLIC_ENVIRONMENT === "production") {
  apiHeaders = `"X-listenAPI-Key": ${process.env.LISTEN_NOTES_API_KEY}`;
}

const API = Axios.create({
  baseURL: BASE_API_URL,
  timeout: 3000,
  headers: {
    apiHeaders,
  },
});

// const endpoints = {
//   search:'/search',
//   bestPodcasts: '/best_podcasts'
// }

const optionArr = {
  genre_id: 93,
  region: "us",
  page: 1,
  sort: "listen_score",
};

export const searchPodcasts = async (search = "") => {
  try {
    const response = await API.get(`/search?q=${search}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPodcasts = async (endpoint, options = { optionArr }) => {
  try {
    const response = await API.get(
      `${endpoint}?genre_id=${options.genre_id}&region=${options.region}&page=${options.page}&sort=${options.sort}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
