import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const roots = ["src", "index.html", "public"].map((entry) => join(root, entry));

const files = [];
for (const entry of roots) {
  collect(entry, files);
}

const text = files.map((file) => readFileSync(file, "utf8")).join("\n");
const content = readFileSync(join(root, "src/content/site.ts"), "utf8");
const html = readFileSync(join(root, "index.html"), "utf8");

const failures = [];

function collect(entry, list) {
  const info = statSync(entry);
  if (info.isDirectory()) {
    for (const name of readdirSync(entry)) {
      collect(join(entry, name), list);
    }
    return;
  }
  if (/\.(ts|tsx|html|css|svg|txt|json|mjs)$/.test(entry)) {
    list.push(entry);
  }
}

function requireText(haystack, needle, label) {
  if (!haystack.includes(needle)) {
    failures.push(`Missing ${label}: ${needle}`);
  }
}

requireText(content, "The System's Shadow", "show name");
requireText(
  content,
  "Because every life in custody matters, and silence is not an option.",
  "tagline",
);
requireText(content, "Lilly Wilbur", "host");
requireText(content, "Katie Kuhnhausen", "host");
const approvedEmail = "lilly@theinspiringwanderess.com";
requireText(content, approvedEmail, "contact email");
requireText(html, 'content="noindex, nofollow, noarchive"', "robots meta");
requireText(text, "Draft preview", "draft marker");

const placeholderCount = content.split("[PLACEHOLDER - copy pending from Marketing]").length - 1;
if (placeholderCount < 15) {
  failures.push(`Expected many placeholder copy markers, found ${placeholderCount}.`);
}

const banned = [
  { name: "email address", pattern: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i },
  { name: "mailto link", pattern: /mailto:/i },
  { name: "web URL", pattern: /https?:\/\/(?!www\.w3\.org\/2000\/svg)/i },
  { name: "www URL", pattern: /\bwww\.(?!w3\.org\/2000\/svg)/i },
  { name: "phone number", pattern: /(?:\+?1[-.\s]*)?(?:\(?\d{3}\)?[-.\s]*)\d{3}[-.\s]*\d{4}/ },
  { name: "attorney", pattern: /\battorney\b/i },
  { name: "lawyer", pattern: /\blawyer\b/i },
  { name: "law firm", pattern: /\blaw firm\b/i },
  { name: "medical examiner", pattern: /\bmedical examiner\b/i },
  { name: "coroner", pattern: /\bcoroner\b/i },
  { name: "esquire", pattern: /\besq\.?\b/i },
];

for (const file of files) {
  const source = readFileSync(file, "utf8");
  const relative = file.replace(root, "");
  const withoutSourceUrls = relative.endsWith("src/content/site.ts")
    ? source
        .split("\n")
        .filter((line) => !/^\s*url:\s*"https:\/\//.test(line))
        .join("\n")
    : source;
  const withoutApprovedEmail = withoutSourceUrls
    .replaceAll(`mailto:${approvedEmail}`, "")
    .replaceAll(approvedEmail, "")
    .replaceAll("mailto:${site.contactEmail}", "");
  for (const rule of banned) {
    const haystack =
      rule.name === "web URL" || rule.name === "www URL"
        ? withoutSourceUrls
        : rule.name === "email address" || rule.name === "mailto link"
          ? withoutApprovedEmail
          : source;
    if (rule.pattern.test(haystack)) {
      failures.push(`${relative} contains a ${rule.name}.`);
    }
  }

  const lines = source.split("\n");
  lines.forEach((line, index) => {
    const withoutNamespace = line.replaceAll("http://www.w3.org/2000/svg", "");
    if (!/https?:\/\/|www\./i.test(withoutNamespace)) {
      return;
    }
    const isApprovedSourceUrl =
      relative.endsWith("src/content/site.ts") && /^\s*url:\s*"https:\/\//.test(line);
    if (!isApprovedSourceUrl) {
      failures.push(`${relative}:${index + 1} contains a URL. Only verified https source url fields are allowed.`);
    }
  });
}

if (content.includes("Systems Shadow") || content.includes("System’s")) {
  failures.push('Show name must use a straight apostrophe: The System\'s Shadow.');
}

if (failures.length > 0) {
  console.error("Draft copy check failed:\n");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(
  `Draft copy check passed (${placeholderCount} placeholder fields, ${files.length} files scanned).`,
);
