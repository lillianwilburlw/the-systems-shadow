import { useEffect } from "react";
import { Link, useParams } from "react-router";
import { getEpisode, site, sourcesForEpisode } from "../content/site.ts";
import { NotFoundMessage } from "./NotFoundPage.tsx";
import { usePageTitle } from "../hooks/usePageTitle.ts";

export function ShowNotesPage() {
  const { slug } = useParams();
  const episode = slug ? getEpisode(slug) : undefined;
  usePageTitle(episode ? episode.title : "Not found");

  useEffect(() => {
    if (episode?.slug !== "episode-01") {
      return;
    }
    const meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      return;
    }
    const previous = meta.getAttribute("content");
    meta.setAttribute("content", episode.summary);
    return () => {
      if (previous !== null) {
        meta.setAttribute("content", previous);
      }
    };
  }, [episode]);

  if (!episode) {
    return <NotFoundMessage />;
  }

  const sources = sourcesForEpisode(episode);

  return (
    <article className="notes">
      <p className="back-row">
        <Link className="back-link" to="/episodes">
          {site.ui.allEpisodes}
        </Link>
      </p>
      <header className="page-header">
        <p className="kicker">
          Episode {episode.number}
          <span aria-hidden="true"> · </span>
          {site.ui.placeholderEntry}
        </p>
        <h1>{episode.title}</h1>
        <dl className="meta">
          <div>
            <dt>{site.ui.dateLabel}</dt>
            <dd>{episode.date}</dd>
          </div>
          <div>
            <dt>{site.ui.lengthLabel}</dt>
            <dd>{episode.duration}</dd>
          </div>
        </dl>
      </header>

      <section className="content-note" aria-labelledby="content-note-heading">
        <h2 id="content-note-heading">{site.ui.contentNote}</h2>
        <p>{episode.contentNote}</p>
      </section>

      <section className="notes-section" aria-labelledby="summary-heading">
        <h2 id="summary-heading">{site.ui.summary}</h2>
        <p>{episode.summary}</p>
      </section>

      <section className="notes-section" aria-labelledby="chapters-heading">
        <h2 id="chapters-heading">{site.ui.chapters}</h2>
        <ol className="chapters">
          {episode.chapters.map((chapter, index) => (
            <li key={`${chapter.timestamp}-${index}`}>
              <span className="timestamp">{chapter.timestamp}</span>
              <span>{chapter.title}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="notes-section" aria-labelledby="sources-heading">
        <h2 id="sources-heading">{site.ui.sources}</h2>
        <ul className="note-sources">
          {sources.map((entry, index) => (
            <li key={entry.id}>
              <a href={`/sources#${entry.id}`}>
                <span className="visually-hidden">Source {index + 1}. </span>
                {entry.label}
              </a>
              <p className="source-url">
                <span className="meta-label">{site.ui.publicUrl}</span> {entry.url}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
