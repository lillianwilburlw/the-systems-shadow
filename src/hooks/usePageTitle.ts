import { useEffect } from "react";
import { site } from "../content/site.ts";

export function usePageTitle(page?: string) {
  useEffect(() => {
    document.title = page
      ? `${page} — ${site.name}`
      : `${site.name} — Draft preview`;
  }, [page]);
}
