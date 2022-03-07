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
    return {
      author: item.author,
      description: removeHtml(item.description),
      title: item.title,
      guid: { ...item.guid },
      pubDate: parseDate(item.pubDate),
      enclosure: { ...item.enclosure },
    };
  });

  const cleanedXML = {
    channel: {
      copyright: parsedXml.rss.channel.copyright,
      description: removeHtml(parsedXml.rss.channel.description),
      image: { ...parsedXml.rss.channel.image },
      episodes: [...cleanedEpisodes],
      pubDate: parseDate(parsedXml.rss.channel.pubDate),
      title: parsedXml.rss.channel.title,
    },
  };
  console.log(cleanedXML);
  return cleanedXML;
}
