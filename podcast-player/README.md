# Podcast Player

## Prompt

Create a podcast player web application with the following pages:

Acceptance Criteria:
- A hardcoded list of podcasts are available from the root URL
- We can view metadata for a specific podcast (title, description, image(s), episodes list)
- We can listen to an episode

Suggested Routes:
- `/` Home view with a hardcoded list of podcasts
- `/show/:showID` See metadata for a specific podcast such as title, description, image(s), and the list of episodes
- `/show/:showID/:episodeID` See metadata for a specific episode and be able to listen to that episode.

Notes:
- Podcast data is served via RSS feed in XML and not JSON. You can use something like [`fast-xml-parser`](https://github.com/NaturalIntelligence/fast-xml-parser)
- The [native `<audio>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio) has basic audio player functionality and UI. No JavaScript required.

Bonus suggestions:
- Find an integrate a search API to find podcasts
- Build a persistent audio player. Continue to display the audio element and play sound even when the user navigates away from the episode, [like SoundCloud](https://soundcloud.com/search?q=rick%20astley)
- Save play progress

### Deliverables

- [ ] a PR to [/coachmatt-io/fe-projects](https://github.com/coachmatt-io/fe-projects)
- [ ] user can navigate to a show and observe metadata
- [ ] user can navigate to an episode, observe metadata, and listen to that episode


## Getting Started

1. Fork this repo

2. Start the project. See instructions for getting started with `create-react-app`:

```bash
# grab the clone URL from your forked repo
git clone git@github.com:<your_username>/fe-projects.git
cd fe-projects
npx create-react-app podcast-player
cd podcast-player
git commit -am first commit
npm install
npm start
```

## Getting Feedback

Submit a PR to [/coachmatt-io/fe-projects](https://github.com/coachmatt-io/fe-projects)

