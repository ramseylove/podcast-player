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

//create axios instance
// const ENV = "development";
// const baseURL =
//   process.env.ENVIRONMENT === "development"
//     ? "https://listen-api-test.listennotes.com/api/v2"
//     : "https://listen-api.listennotes.com/api/v2";
// const apiKey =
//   process.env.ENVIRONMENT === "development"
//     ? ""
//     : process.env.LISTEN_NOTES_API_KEY;
const apiHeader =
  process.env.ENVIRONMENT === "development"
    ? `"X-listenAPI-Key": ${process.env.LISTEN_NOTES_API_KEY}`
    : "";

const BASE_API_URL =
  "https://listen-api-test.listennotes.com/api/v2" || process.env.BASE_API_URL;

const API = Axios.create({
  baseURL: BASE_API_URL,
  timeout: 3000,
  headers: {
    apiHeader,
  },
});

export const searchPodcasts = async (search = "") => {
  try {
    const response = await API.get(`/search?q=${search}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
