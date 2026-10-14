import { Link } from "react-router";
import { site } from "../content/site.ts";

type EpisodeListProps = {
  episodes: typeof site.episodes;
  titleLevel: "h2" | "h3";
};

export function EpisodeList({ episodes, titleLevel }: EpisodeListProps) {
  const Title = titleLevel;

  if (episodes.length === 0) {
    return <p className="empty">{site.ui.emptyEpisodes}</p>;
  }

  return (
    <ul className="episode-list">
      {episodes.map((episode) => (
        <li key={episode.slug}>
          <Link className="episode-link" to={`/episodes/${episode.slug}`}>
            <span className="episode-number">{episode.number}</span>
            <span className="episode-body">
              <span className="kicker">{site.ui.placeholderEntry}</span>
              <Title className="episode-title">{episode.title}</Title>
              <span className="episode-meta">
                <span>
                  <span className="meta-label">{site.ui.dateLabel}</span> {episode.date}
                </span>
                <span>
                  <span className="meta-label">{site.ui.lengthLabel}</span> {episode.duration}
                </span>
              </span>
              {episode.slug === "episode-01" ? (
                <span className="episode-description">{episode.summary}</span>
              ) : null}
            </span>
            <span className="episode-go">{site.ui.showNotes}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
