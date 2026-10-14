import { Link } from "react-router";
import { site } from "../content/site.ts";
import { usePageTitle } from "../hooks/usePageTitle.ts";

export function NotFoundMessage() {
  return (
    <header className="page-header">
      <h1>{site.ui.notFoundTitle}</h1>
      <p className="lede">{site.ui.notFoundBody}</p>
      <p>
        <Link className="back-link" to="/">
          {site.ui.homeLink}
        </Link>
      </p>
    </header>
  );
}

export function NotFoundPage() {
  usePageTitle("Not found");
  return <NotFoundMessage />;
}
