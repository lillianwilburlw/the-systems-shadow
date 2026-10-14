import { useState, type FormEvent } from "react";
import { site } from "../content/site.ts";
import { PageHeader } from "../components/PageHeader.tsx";
import { usePageTitle } from "../hooks/usePageTitle.ts";

export function ContactPage() {
  usePageTitle(site.ui.contactTitle);
  const [notice, setNotice] = useState<string | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(site.ui.blockedNotice);
  }

  return (
    <>
      <PageHeader title={site.ui.contactTitle} lede={site.pageIntros.contact} />
      <div className="contact-grid">
        <section aria-labelledby="email-heading">
          <h2 id="email-heading">{site.ui.emailLabel}</h2>
          <p className="pending-email" translate="no">
            <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
          </p>
        </section>
        <section className="signup" aria-labelledby="signup-heading">
          <div className="signup-heading">
            <h2 id="signup-heading">{site.ui.launchUpdates}</h2>
            <p className="badge">{site.ui.preview}</p>
          </div>
          <p id="signup-preview">{site.ui.formNote}</p>
          <form noValidate onSubmit={onSubmit} aria-describedby="signup-preview">
            <div className="field">
              <label htmlFor="launch-email">{site.ui.emailLabel}</label>
              <input
                id="launch-email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
              />
            </div>
            <button type="submit" disabled>
              {site.ui.signUp}
            </button>
            <p className="form-notice" role="status">
              {notice}
            </p>
          </form>
        </section>
      </div>
    </>
  );
}
