import { isPublicHttpsUrl, site } from "../content/site.ts";
import { PageHeader } from "../components/PageHeader.tsx";
import { usePageTitle } from "../hooks/usePageTitle.ts";

export function SourcesPage() {
  usePageTitle(site.ui.sourcesTitle);

  return (
    <>
      <PageHeader title={site.ui.sourcesTitle} lede={site.pageIntros.sources} />
      <div className="source-groups">
        {site.sourceGroups.map((group) => (
          <section key={group.id} aria-labelledby={`${group.id}-heading`}>
            <h2 id={`${group.id}-heading`}>{group.title}</h2>
            <ul className="source-list">
              {group.entries.map((entry) => {
                const linked = isPublicHttpsUrl(entry.url);
                return (
                  <li key={entry.id} id={entry.id} className="source-item">
                    {linked ? null : <p className="kicker">{site.ui.placeholderLink}</p>}
                    {linked ? (
                      <a className="source-label" href={entry.url} target="_blank" rel="noopener">
                        {entry.label}
                      </a>
                    ) : (
                      <p className="source-label">{entry.label}</p>
                    )}
                    <p className="source-url">
                      <span className="meta-label">{site.ui.publicUrl}</span>{" "}
                      {linked ? (
                        <a href={entry.url} target="_blank" rel="noopener">
                          {entry.url}
                        </a>
                      ) : (
                        entry.url
                      )}
                    </p>
                    <p>{entry.detail}</p>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
