# Podcast Player

- Currently only using hardcoded show data(shown below):
- Getting metadata for these specific podcasts and their episodes.
- Using Material UI v5 for my layout and components
- Using a fork of [`fast-xml-parser`](https://github.com/NaturalIntelligence/fast-xml-parser) called ['arraybuffer-xml-parser](https://github.com/cheminfo/arraybuffer-xml-parser) to parse XML encoded data which podcast RSS feeds use.
- Episodes play using the built in audio element

## Live Demo
[https://ultimate-podcasting.vercel.app](https://ultimate-podcasting.vercel.app)

## Future features and Development Plans

- Use Declarative routing with react-router-dom or migrate to NextJs file based routing
- Integrate with [listennotes.com](https://www.listennotes.com/api/)
- Build a persistent audio player. Continue to display the audio element and play sound even when the user navigates away from the episode, [like SoundCloud](https://soundcloud.com/search?q=rick%20astley)
- Save play progress
- Include automated tests
- Package with Electron

```js
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
```
