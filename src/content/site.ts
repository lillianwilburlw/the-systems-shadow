/**
 * The Widow and the Whistleblower — preview copy
 *
 * The show name, tagline, descriptive line, host names, and contact
 * address below are approved and must stay exact.
 *
 * The tagline is only for the hero line, social and Open Graph
 * descriptions, and the cover alt text. The apostrophe there is curly.
 * Do not use the former title as the show name.
 *
 * Alex Kuhnhausen is named because Katie and national reporting have
 * already put that file in public. Four other names stay off this branch.
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
  status: string;
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
  name: "The Widow and the Whistleblower",
  tagline: "The Widow and the Whistleblower: The System’s Shadow",
  description:
    "Because every life in custody matters, and silence is not an option.",
  cover: {
    src: "/cover-1200.jpg",
    srcSet: "/cover-600.jpg 600w, /cover-1200.jpg 1200w",
    webpSrcSet: "/cover-600.webp 600w, /cover-1200.webp 1200w",
    width: 1200,
    height: 1200,
    favicon: "/favicon-32.png",
    appleTouchIcon: "/apple-touch-icon.png",
    ogImage: "/cover-1200.jpg",
  },
  contactEmail: "info@thewidowandthewhistleblower.com",
  ui: {
    draft: "Draft preview",
    draftFooter: "Draft preview. Not for publication.",
    skip: "Skip to content",
    menu: "Menu",
    closeMenu: "Close",
    navEpisodes: "Season",
    navSources: "The record",
    navAbout: "Hosts",
    navContact: "Contact",
    latest: "Season one",
    allEpisodes: "Full slate",
    showNotes: "Notes",
    summary: "Summary",
    chapters: "Chapters",
    sources: "Sources",
    contentNote: "Content note",
    coverArt: "Cover art",
    placeholderArt: "Doorway",
    trailer: "No trailer",
    aboutTitle: "Hosts",
    contactTitle: "Contact",
    episodesTitle: "Season one",
    sourcesTitle: "The record",
    emailLabel: "Email",
    dateLabel: "Date",
    lengthLabel: "Length",
    launchUpdates: "Premiere alert",
    preview: "Preview",
    formNote:
      "Preview only. This form is disabled and does not send or store anything. One letter is the ask, on the morning of December 1.",
    signUp: "Sign up",
    blockedNotice: "Nothing was sent. This preview form is not active.",
    notFoundTitle: "This page was never filed.",
    notFoundBody: "That address is not part of this draft preview.",
    homeLink: "Back to the doorway",
    coHosts: "Citizen journalism",
    placeholderEntry: "Working slate",
    placeholderLink: "Not a public link",
    publicUrl: "Public URL",
    emptyEpisodes: "No episodes are on this slate.",
  },
  home: {
    description:
      "Five people died in Washington prisons. This season reads the public record and asks what was missed, who was responsible, and what has to change. One name is already public. The other four stay sealed until an episode can carry the file. Nothing here is a published episode yet.",
    coverCaption: "The photograph is a doorway, not a portrait of anyone who died.",
    trailerCaption:
      "There is no trailer. A clip scored over a death will not be cut. Episode one opens Tuesday, December 1, 2026.",
  },
  pageIntros: {
    episodes:
      "Nothing on this list is a published episode except the date of the first one. Titles after December 1 are the shape of the season. They will change if the records change.",
    sources:
      "Alex Kuhnhausen was 25. He was close to the end of a sentence of about 17 months at the Washington State Penitentiary in Walla Walla when a bacterial infection took hold in solitary confinement. Public reporting describes a kidney infection that moved toward his lungs and brain, with damage to his heart valves. He was airlifted to Providence Sacred Heart in Spokane. Doctors there concluded he was too sick for surgery to replace the valves. He was pronounced dead at 7:18 a.m. on Wednesday, April 24, 2024. Katie called the penitentiary sixteen times and wrote the superintendent with the subject line HELP ME!!! HELP ME!!! Visiting staff had already turned her away. According to an internal incident summary in the Associated Press, the department told her he was dying at 6:20 a.m. He died less than an hour later. She has said, on the record, that they knew he was dying, and that she was cheated out of time with him. She put the state on notice of a wrongful-death claim. The links below are the public reports this draft is willing to repeat.",
    about:
      "Two hosts. One lived the silence from outside the wall. One read the system from inside the department she later left. Neither voice is a narrator for hire.",
    contact:
      "Press, families of people who died in Washington custody, and booking. If a sealed file may be yours, write before an episode. A name you ask us to hold stays held.",
  },
  hosts: [
    {
      name: "Katie Kuhnhausen",
      role: "The widow",
      bio: "Katie’s husband, Alex Kuhnhausen, died in state custody on April 24, 2024. She had driven toward Walla Walla to see him and been turned away. She had called. She had written the superintendent in capital letters. Since then she has asked for the records, sat with reporters, and refused to let the death close as a paragraph in an annual count. She is not on this show as a guest. She is a host because the silence was hers.",
    },
    {
      name: "Lilly Wilbur",
      role: "The whistleblower",
      bio: "Lilly spent more than twenty years in Washington corrections, later as a strategic analyst inside the Department of Corrections, before she left and began saying in public what the files would not say on their own. She comes to the season as a reader of systems: policies, fatality reviews, and the distance between a rule on paper and what happened on a unit. Her job on the show is translation. What a document is supposed to prove, and what it actually proves.",
    },
  ] satisfies Host[],
  episodes: [
    {
      slug: "the-doorway",
      number: "01",
      title: "The Doorway",
      date: "Dec 1, 2026",
      duration: "About 40 min",
      status: "Premiere",
      summary:
        "How a widow and a whistleblower ended up reading the same public record, and the rules this season will not break. No other death is named.",
      contentNote:
        "Working show notes, not a published transcript. Audio is not up until the morning of December 1.",
      chapters: [
        { timestamp: "00:00", title: "Who is speaking" },
        { timestamp: "08:00", title: "Why the image is a doorway" },
        { timestamp: "18:00", title: "What counts as the record" },
        { timestamp: "30:00", title: "Four names that stay off the site" },
      ],
      sourceIds: ["src-1", "src-4"],
    },
    {
      slug: "sixteen-calls",
      number: "02",
      title: "Sixteen Calls",
      date: "Dec 8, 2026",
      duration: "About 45 min",
      status: "In the record",
      summary:
        "Alex’s last two weeks. What Katie was told, what the file says staff already knew, and the hours in between. Where a document is still withheld, the episode says so.",
      contentNote:
        "Built from reporting already public and from records Katie has obtained. Dialogue that is not in a document or in Katie’s account is not added.",
      chapters: [
        { timestamp: "00:00", title: "The visit that did not happen" },
        { timestamp: "12:00", title: "Sixteen calls" },
        { timestamp: "22:00", title: "The email in capital letters" },
        { timestamp: "34:00", title: "6:20 a.m." },
      ],
      sourceIds: ["src-7", "src-8"],
    },
    {
      slug: "a-treatable-infection",
      number: "03",
      title: "A Treatable Infection",
      date: "Dec 15, 2026",
      duration: "About 42 min",
      status: "In the record",
      summary:
        "The medical chart, as far as it has been released: symptoms, solitary, the airlift, the valves. The subject is the decisions, and when they were made.",
      contentNote:
        "Medical claims stay inside what The Nation, the Associated Press, and InvestigateWest have already published, plus any chart pages released before air.",
      chapters: [
        { timestamp: "00:00", title: "What he reported" },
        { timestamp: "11:00", title: "Solitary" },
        { timestamp: "24:00", title: "The airlift to Spokane" },
        { timestamp: "34:00", title: "Too sick for the surgery" },
      ],
      sourceIds: ["src-7", "src-8"],
    },
    {
      slug: "the-second-name",
      number: "04",
      title: "The Second Name",
      date: "Jan 5, 2027",
      duration: "Length not set",
      status: "Held",
      summary:
        "The next death in the season. The name is not on this page until the episode can carry it. If the records are not ready, the date moves. The name does not leak to keep a schedule.",
      contentNote: "Chapters stay untitled on purpose. A working title is not a name.",
      chapters: [
        { timestamp: "—", title: "The file, read in order" },
        { timestamp: "—", title: "What the family was told" },
        { timestamp: "—", title: "What the review concluded" },
      ],
      sourceIds: [],
    },
    {
      slug: "the-third-name",
      number: "05",
      title: "The Third Name",
      date: "Jan 12, 2027",
      duration: "Length not set",
      status: "Held",
      summary: "Same method. A different facility, a different file, the same three questions.",
      contentNote: "Held with episode four. The season is a docket, not a content calendar.",
      chapters: [
        { timestamp: "—", title: "A different facility" },
        { timestamp: "—", title: "The same three questions" },
      ],
      sourceIds: [],
    },
    {
      slug: "who-signs-the-review",
      number: "06",
      title: "Who Signs the Review",
      date: "Jan 19, 2027",
      duration: "About 40 min",
      status: "Held",
      summary:
        "After a death in custody, who investigates the agency, and who is allowed to see that work. This episode is about the process, not a new name.",
      contentNote:
        "It can air on the documents already public and on Washington policy.",
      chapters: [
        { timestamp: "00:00", title: "The review that investigates itself" },
        { timestamp: "14:00", title: "What a family can request" },
        { timestamp: "28:00", title: "What never leaves the building" },
      ],
      sourceIds: ["src-2", "src-3"],
    },
    {
      slug: "what-has-to-change",
      number: "07",
      title: "What Has to Change",
      date: "Jan 26, 2027",
      duration: "About 35 min",
      status: "Held",
      summary:
        "The last episode of the season. Not a montage. A list of changes the records can actually support. No reform list written in advance of the files.",
      contentNote: "Recommendations are limited to what the season’s documents can carry.",
      chapters: [
        { timestamp: "00:00", title: "What the five files have in common" },
        { timestamp: "12:00", title: "Notice to a family" },
        { timestamp: "22:00", title: "An outside review" },
      ],
      sourceIds: ["src-1", "src-4"],
    },
  ] satisfies Episode[],
  sourceGroups: [
    {
      id: "reporting",
      title: "Alex Kuhnhausen, already public",
      entries: [
        {
          id: "src-7",
          label: "The Nation, How Prison Neglect Killed Alex Kuhnhausen (Rachel Hunter Himes, June 11, 2026)",
          url: "https://www.thenation.com/article/society/alex-kuhnhausen-death-prison-neglect/",
          detail: "National reporting on the two weeks before Alex Kuhnhausen died.",
        },
        {
          id: "src-8",
          label: "Associated Press, Washington woman says prison failed to diagnose her husband’s fatal illness (Brandon Block / InvestigateWest, October 28, 2025)",
          url: "https://apnews.com/article/prisons-katie-kuhnhausen-washington-walla-walla-spokane-17b5a83ff556d7d327fe955171a2d00f",
          detail: "The sixteen calls, the capital-letter email, and the morning the department called.",
        },
      ],
    },
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
          detail: "Fiscal year 2024 annual report on unexpected fatality reviews.",
        },
        {
          id: "src-3",
          label: "Office of the Corrections Ombuds, FY2025 Unexpected Fatality Review Annual Report",
          url: "https://oco.wa.gov/wp-content/uploads/sites/default/files/public/OCO%20UFR%20Annual%20Report%20FY25.pdf",
          detail: "Fiscal year 2025 annual report on unexpected fatality reviews.",
        },
        {
          id: "src-4",
          label: "Seattle Times, When people die in WA prisons, many don't get an autopsy (Brandon Block, Feb 22, 2026)",
          url: "https://www.seattletimes.com/seattle-news/law-justice/when-people-die-in-wa-prisons-many-dont-get-an-autopsy/",
          detail: "Seattle Times reporting on autopsy practices after deaths in Washington prisons.",
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
