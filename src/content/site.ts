/**
 * The System's Shadow — draft content
 *
 * Edit this file when approved copy arrives. It is the only source of
 * on-site text. The show name, tagline, and host names below are approved
 * and must stay exact, including the apostrophe in "System's".
 *
 * Replace each "[PLACEHOLDER - copy pending from Marketing]" field in
 * place. Do not add addresses, phone numbers, real email addresses,
 * names of counsel or firms, case records, examiner names, or the
 * names of people who have died.
 *
 * Subject for the eventual show description (do not publish this note):
 * deaths in custody in the Washington State Department of Corrections.
 *
 * Source links: put a verified public address in `url`. The site treats a
 * value as a link only when it is an absolute secure URL.
 */

export type Chapter = {
  timestamp: string;
  title: string;
};

export type SourceEntry = {
  id: string;
  label: string;
  url: string;
  detail: string;
};

export type SourceGroup = {
  id: string;
  title: string;
  entries: SourceEntry[];
};

export type Episode = {
  slug: string;
  number: string;
  title: string;
  date: string;
  duration: string;
  summary: string;
  contentNote: string;
  chapters: Chapter[];
  sourceIds: string[];
};

export type Host = {
  name: string;
  role: string;
  bio: string;
};

export const site = {
  name: "The System's Shadow",
  tagline:
    "Because every life in custody matters, and silence is not an option.",
  contactEmail: "lilly@theinspiringwanderess.com",
  ui: {
    draft: "Draft preview",
    draftFooter: "Draft preview. Not for publication.",
    skip: "Skip to content",
    menu: "Menu",
    closeMenu: "Close",
    navEpisodes: "Episodes",
    navSources: "Sources",
    navAbout: "About",
    navContact: "Contact",
    latest: "Latest episodes",
    allEpisodes: "All episodes",
    showNotes: "Show notes",
    summary: "Summary",
    chapters: "Chapters",
    sources: "Sources",
    contentNote: "Content note",
    coverArt: "Cover art",
    placeholderArt: "Placeholder art",
    trailer: "Trailer embed",
    aboutTitle: "About the hosts",
    contactTitle: "Contact",
    episodesTitle: "Episodes",
    sourcesTitle: "Sources",
    emailLabel: "Email",
    dateLabel: "Date",
    lengthLabel: "Length",
    launchUpdates: "Launch updates",
    preview: "Preview",
    formNote:
      "Preview only. This form is disabled and does not send or store anything.",
    signUp: "Sign up",
    blockedNotice: "Nothing was sent. This preview form is not active.",
    notFoundTitle: "Page not in this draft",
    notFoundBody: "That address is not part of this draft preview.",
    homeLink: "Back to home",
    coHosts: "Co-hosts",
    placeholderEntry: "Placeholder entry",
    placeholderLink: "Placeholder link",
    publicUrl: "Public URL",
    emptyEpisodes: "[PLACEHOLDER - copy pending from Marketing]",
  },
  home: {
    description: "[PLACEHOLDER - copy pending from Marketing]",
    coverCaption: "[PLACEHOLDER - copy pending from Marketing]",
    trailerCaption: "[PLACEHOLDER - copy pending from Marketing]",
  },
  pageIntros: {
    episodes: "[PLACEHOLDER - copy pending from Marketing]",
    sources: "[PLACEHOLDER - copy pending from Marketing]",
    about: "[PLACEHOLDER - copy pending from Marketing]",
    contact: "[PLACEHOLDER - copy pending from Marketing]",
  },
  hosts: [
    {
      name: "Lilly Wilbur",
      role: "Co-host",
      bio: "[PLACEHOLDER - copy pending from Marketing]",
    },
    {
      name: "Katie Kuhnhausen",
      role: "Co-host",
      bio: "[PLACEHOLDER - copy pending from Marketing]",
    },
  ] satisfies Host[],
  episodes: [
    {
      slug: "episode-01",
      number: "01",
      title: "Five Lives That Demanded to Be Heard",
      date: "Launch day (date TBA)",
      duration: "[PLACEHOLDER - copy pending from Marketing]",
      summary:
        "Between January and June of 2024, at least five people died in Washington State prisons. Katie Kuhnhausen and Lilly Wilbur ask why some of them never got an autopsy, and how one word, 'expected,' can decide whether anyone outside ever looks.",
      contentNote: "[PLACEHOLDER - copy pending from Marketing]",
      chapters: [
        { timestamp: "[--:--]", title: "[PLACEHOLDER - copy pending from Marketing]" },
        { timestamp: "[--:--]", title: "[PLACEHOLDER - copy pending from Marketing]" },
        { timestamp: "[--:--]", title: "[PLACEHOLDER - copy pending from Marketing]" },
      ],
      sourceIds: ["src-1", "src-2"],
    },
    {
      slug: "episode-02",
      number: "02",
      title: '"Expected": Justin Fessel and Clifton Carey',
      date: "Launch day (date TBA)",
      duration: "[PLACEHOLDER - copy pending from Marketing]",
      summary: "[PLACEHOLDER - copy pending from Marketing]",
      contentNote: "[PLACEHOLDER - copy pending from Marketing]",
      chapters: [
        { timestamp: "[--:--]", title: "[PLACEHOLDER - copy pending from Marketing]" },
        { timestamp: "[--:--]", title: "[PLACEHOLDER - copy pending from Marketing]" },
        { timestamp: "[--:--]", title: "[PLACEHOLDER - copy pending from Marketing]" },
      ],
      sourceIds: ["src-3", "src-4"],
    },
    {
      slug: "episode-03",
      number: "03",
      title: "\"HELP ME!!! HELP ME!!!!\": Alex's Last Fourteen Days",
      date: "Launch day (date TBA)",
      duration: "[PLACEHOLDER - copy pending from Marketing]",
      summary: "[PLACEHOLDER - copy pending from Marketing]",
      contentNote: "[PLACEHOLDER - copy pending from Marketing]",
      chapters: [
        { timestamp: "[--:--]", title: "[PLACEHOLDER - copy pending from Marketing]" },
        { timestamp: "[--:--]", title: "[PLACEHOLDER - copy pending from Marketing]" },
        { timestamp: "[--:--]", title: "[PLACEHOLDER - copy pending from Marketing]" },
      ],
      sourceIds: ["src-5", "src-6"],
    },
    {
      slug: "episode-04",
      number: "04",
      title: "Foreseeable: William Phouthavongxay and Danielle Reyes",
      date: "Launch + 1 week (date TBA)",
      duration: "[PLACEHOLDER - copy pending from Marketing]",
      summary: "[PLACEHOLDER - copy pending from Marketing]",
      contentNote: "[PLACEHOLDER - copy pending from Marketing]",
      chapters: [
        { timestamp: "[--:--]", title: "[PLACEHOLDER - copy pending from Marketing]" },
        { timestamp: "[--:--]", title: "[PLACEHOLDER - copy pending from Marketing]" },
        { timestamp: "[--:--]", title: "[PLACEHOLDER - copy pending from Marketing]" },
      ],
      sourceIds: [],
    },
    {
      slug: "episode-05",
      number: "05",
      title: "Deliberate Indifference",
      date: "Launch + 2 weeks (date TBA)",
      duration: "[PLACEHOLDER - copy pending from Marketing]",
      summary: "[PLACEHOLDER - copy pending from Marketing]",
      contentNote: "[PLACEHOLDER - copy pending from Marketing]",
      chapters: [
        { timestamp: "[--:--]", title: "[PLACEHOLDER - copy pending from Marketing]" },
        { timestamp: "[--:--]", title: "[PLACEHOLDER - copy pending from Marketing]" },
        { timestamp: "[--:--]", title: "[PLACEHOLDER - copy pending from Marketing]" },
      ],
      sourceIds: [],
    },
  ] satisfies Episode[],
  sourceGroups: [
    {
      id: "public",
      title: "Verified public links",
      entries: [
        {
          id: "src-1",
          label: "Concerning Deaths in Custody (report by Lilly Wilbur)",
          url: "https://archive.org/details/deathsin-custody-final-121824_202502",
          detail: "Public report by Lilly Wilbur on deaths in custody.",
        },
        {
          id: "src-2",
          label: "Office of the Corrections Ombuds, FY2024 Unexpected Fatality Review Annual Report",
          url: "https://oco.wa.gov/wp-content/uploads/sites/default/files/public/OCO%202024%20UFR%20Annual%20Report.pdf",
          detail: "Fiscal year 2024 annual report on unexpected fatality reviews from the Office of the Corrections Ombuds.",
        },
        {
          id: "src-3",
          label: "Office of the Corrections Ombuds, FY2025 Unexpected Fatality Review Annual Report",
          url: "https://oco.wa.gov/wp-content/uploads/sites/default/files/public/OCO%20UFR%20Annual%20Report%20FY25.pdf",
          detail: "Fiscal year 2025 annual report on unexpected fatality reviews from the Office of the Corrections Ombuds.",
        },
        {
          id: "src-4",
          label: "Seattle Times, \"When people die in WA prisons, many don't get an autopsy\" (Brandon Block, Feb 22, 2026)",
          url: "https://www.seattletimes.com/seattle-news/law-justice/when-people-die-in-wa-prisons-many-dont-get-an-autopsy/",
          detail: "Seattle Times article on autopsy practices after deaths in Washington prisons.",
        },
      ],
    },
    {
      id: "resources",
      title: "Resources",
      entries: [
        {
          id: "src-5",
          label: "File a complaint with the Office of the Corrections Ombuds",
          url: "https://ocoportal.dynamics365portals.us/create-complaint/",
          detail: "Form for filing a complaint with the Office of the Corrections Ombuds.",
        },
        {
          id: "src-6",
          label: "Ombuds home page",
          url: "https://oco.wa.gov",
          detail: "Home page of the Office of the Corrections Ombuds.",
        },
      ],
    },
  ] satisfies SourceGroup[],
} as const;

type EpisodeRecord = (typeof site.episodes)[number];
type SourceRecord = (typeof site.sourceGroups)[number]["entries"][number];

const sourcesById = new Map<string, SourceRecord>(
  site.sourceGroups.flatMap((group) =>
    group.entries.map((entry) => [entry.id, entry] as const),
  ),
);

export function getEpisode(slug: string): EpisodeRecord | undefined {
  return site.episodes.find((episode) => episode.slug === slug);
}

export function sourcesForEpisode(episode: EpisodeRecord): SourceRecord[] {
  return episode.sourceIds.flatMap((id) => {
    const entry = sourcesById.get(id);
    return entry ? [entry] : [];
  });
}

export function titleLines(name: string): { lead: string; last: string } {
  const index = name.lastIndexOf(" ");
  if (index === -1) {
    return { lead: name, last: "" };
  }
  return { lead: name.slice(0, index), last: name.slice(index + 1) };
}

export function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter((part) => part.length > 0)
    .map((part) => part[0] ?? "")
    .join("");
}

export function isPublicHttpsUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "https:";
  } catch {
    return false;
  }
}
