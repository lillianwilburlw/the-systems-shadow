import { Link } from "react-router";
import { site, titleLines } from "../content/site.ts";
import { CoverArt } from "../components/CoverArt.tsx";
import { EpisodeList } from "../components/EpisodeList.tsx";
import { TrailerPlaceholder } from "../components/TrailerPlaceholder.tsx";
import { usePageTitle } from "../hooks/usePageTitle.ts";

export function HomePage() {
  usePageTitle();
  const title = titleLines(site.name);

  return (
    <>
      <section className="hero">
        <p className="kicker">{site.ui.coHosts}</p>
        <h1 className="hero-title" translate="no">
          {title.lead}{" "}
          <span className="hero-shadow">{title.last}</span>
        </h1>
        <p className="tagline" translate="no">
          {site.tagline}
        </p>
        <p className="descriptive-line" translate="no">
          {site.description}
        </p>
        <p className="byline">
          <Link to="/about" translate="no">
            {site.hosts.map((host) => host.name).join(" and ")}
          </Link>
        </p>
        <hr className="short-rule" />
        <p className="lede">{site.home.description}</p>
        <div className="hero-media">
          <CoverArt caption={site.home.coverCaption} />
          <TrailerPlaceholder caption={site.home.trailerCaption} />
        </div>
      </section>
      <section className="latest" aria-labelledby="latest-heading">
        <div className="section-heading">
          <h2 id="latest-heading">{site.ui.latest}</h2>
          <Link to="/episodes">{site.ui.allEpisodes}</Link>
        </div>
        <EpisodeList episodes={site.episodes} titleLevel="h3" />
      </section>
    </>
  );
}
