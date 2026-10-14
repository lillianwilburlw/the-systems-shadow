import { initials, site } from "../content/site.ts";
import { PageHeader } from "../components/PageHeader.tsx";
import { usePageTitle } from "../hooks/usePageTitle.ts";

export function AboutPage() {
  usePageTitle(site.ui.aboutTitle);

  return (
    <>
      <PageHeader title={site.ui.aboutTitle} lede={site.pageIntros.about} />
      <ul className="host-list">
        {site.hosts.map((host) => (
          <li key={host.name} className="host">
            <p className="monogram" aria-hidden="true">
              {initials(host.name)}
            </p>
            <h2 translate="no">{host.name}</h2>
            <p className="kicker">{host.role}</p>
            <p>{host.bio}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
