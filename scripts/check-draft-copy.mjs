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

const showName = "The Widow and the Whistleblower";
const curlyApostrophe = "\u2019";
const tagline = `${showName}: The System${curlyApostrophe}s Shadow`;
const descriptiveLine =
  "Because every life in custody matters, and silence is not an option.";
const straightShowName = `The System${String.fromCharCode(39)}s Shadow`;

requireText(content, showName, "show name");
requireText(content, tagline, "tagline");
requireText(content, descriptiveLine, "descriptive line");
requireText(html, showName, "show name in the document head");
requireText(html, tagline, "social description");
requireText(content, "Lilly Wilbur", "host");
requireText(content, "Katie Kuhnhausen", "host");
const approvedEmail = "info@thewidowandthewhistleblower.com";
requireText(content, approvedEmail, "contact email");
requireText(html, 'content="noindex, nofollow, noarchive"', "robots meta");
requireText(text, "Draft preview", "draft marker");

const placeholderMarker = "[PLACEHOLDER - copy pending from Marketing]";
if (text.includes(placeholderMarker)) {
  failures.push("Placeholder copy is still in the site.");
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

const pkg = readFileSync(join(root, "package.json"), "utf8");
requireText(pkg, '"name": "the-widow-and-the-whistleblower"', "package name");

const retiredTitle = `System${curlyApostrophe}s Shadow`;
for (const file of files) {
  const source = readFileSync(file, "utf8");
  const relative = file.replace(root, "");
  if (source.includes(straightShowName) || source.includes("Systems Shadow")) {
    failures.push(`${relative} uses the retired show name.`);
  }
  const retiredCount = source.split(retiredTitle).length - 1;
  const taglineCount = source.split(tagline).length - 1;
  if (retiredCount !== taglineCount) {
    failures.push(`${relative} uses the former title outside the tagline.`);
  }
}

if (failures.length > 0) {
  console.error("Draft copy check failed:\n");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`Draft copy check passed (${files.length} files scanned).`);
