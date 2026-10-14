import { site } from "../content/site.ts";
import { EpisodeList } from "../components/EpisodeList.tsx";
import { PageHeader } from "../components/PageHeader.tsx";
import { usePageTitle } from "../hooks/usePageTitle.ts";

export function EpisodesPage() {
  usePageTitle(site.ui.episodesTitle);

  return (
    <>
      <PageHeader title={site.ui.episodesTitle} lede={site.pageIntros.episodes} />
      <EpisodeList episodes={site.episodes} titleLevel="h2" />
    </>
  );
}
