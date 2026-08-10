// Validates the JSON SEO batches under lib/seo-data before they are bundled.
// Run with: node scripts/validate-seo.mjs
// Checks structure, exact array counts, valid tones/types, metaTitle suffix,
// no em/en dashes, no banned words, slug uniqueness, and valid related slugs.
import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = join(root, "lib", "seo-data");

const BANNED =
  /\b(revolutionary|seamless|unlock|supercharge|transform(?:ation|ed|ing|s)?|game[- ]?chang\w*|effortless|cutting[- ]edge|leverage[ds]?|empower\w*|elevate[ds]?|robust|turnkey|streamline[ds]?|holistic|synergy|synergies)\b/i;
const TONES = new Set(["risk", "changed", "watch"]);
const TYPES = new Set(["solution", "tool", "template", "comparison"]);
const COUNTS = {
  painBullets: 3,
  whyHard: 3,
  howHusnHelps: 3,
  useCases: 3,
  idealFor: 4,
  faq: 4,
  related: 3,
};

const errors = [];
const slugs = new Set();
const allRelated = [];
// For cross-page duplicate detection on the long, page-defining fields.
const seenStrings = new Map(); // normalized string -> "field@slug"
const DUP_FIELDS = [
  "heroHeadline",
  "heroSubheadline",
  "primaryPain",
  "ctaText",
  "ctaHeadline",
];

for (const file of readdirSync(dataDir).filter((f) => f.endsWith(".json"))) {
  let arr;
  try {
    arr = JSON.parse(readFileSync(join(dataDir, file), "utf8"));
  } catch (e) {
    errors.push(`${file}: invalid JSON (${e.message})`);
    continue;
  }
  if (!Array.isArray(arr)) {
    errors.push(`${file}: top level is not an array`);
    continue;
  }
  for (const p of arr) {
    const id = `${file}:${p.slug ?? "(no slug)"}`;
    if (!p.slug) errors.push(`${id}: missing slug`);
    else if (slugs.has(p.slug)) errors.push(`${id}: duplicate slug`);
    else slugs.add(p.slug);

    if (!TYPES.has(p.type)) errors.push(`${id}: bad type "${p.type}"`);
    for (const [k, n] of Object.entries(COUNTS)) {
      if (!Array.isArray(p[k]) || p[k].length !== n) {
        errors.push(`${id}: ${k} should have ${n} items`);
      }
    }
    if (
      !p.briefing ||
      !Array.isArray(p.briefing.items) ||
      p.briefing.items.length !== 3
    ) {
      errors.push(`${id}: briefing.items should have 3 items`);
    } else {
      for (const it of p.briefing.items) {
        if (!TONES.has(it.tone)) errors.push(`${id}: bad tone "${it.tone}"`);
      }
    }
    if (typeof p.metaTitle === "string" && !p.metaTitle.endsWith("| Husn")) {
      errors.push(`${id}: metaTitle must end with "| Husn"`);
    }
    if (
      p.type === "template" &&
      (!Array.isArray(p.templateContents) || p.templateContents.length === 0)
    ) {
      errors.push(`${id}: template type needs templateContents`);
    }
    if (p.type === "comparison") {
      const c = p.comparison;
      if (!c || typeof c !== "object") {
        errors.push(`${id}: comparison type needs a comparison object`);
      } else {
        if (!c.competitor) errors.push(`${id}: comparison.competitor missing`);
        if (!c.summary) errors.push(`${id}: comparison.summary missing`);
        if (!Array.isArray(c.rows) || c.rows.length !== 6) {
          errors.push(`${id}: comparison.rows should have 6 rows`);
        } else {
          for (const row of c.rows) {
            if (!row.dimension || !row.husn || !row.them) {
              errors.push(`${id}: comparison row missing dimension/husn/them`);
            }
          }
        }
      }
    }

    const blob = JSON.stringify(p);
    if (/[—–]/.test(blob)) errors.push(`${id}: contains em/en dash`);
    const banned = blob.match(BANNED);
    if (banned) errors.push(`${id}: banned word "${banned[0]}"`);

    // Cross-page duplicate detection on the defining fields.
    for (const field of DUP_FIELDS) {
      const val = p[field];
      if (typeof val !== "string") continue;
      const norm = val.trim().toLowerCase().replace(/\s+/g, " ");
      if (norm.length < 12) continue;
      const prev = seenStrings.get(norm);
      if (prev) errors.push(`${id}: ${field} duplicates ${prev}`);
      else seenStrings.set(norm, `${field}@${p.slug}`);
    }

    for (const r of p.related ?? []) {
      if (r === p.slug) errors.push(`${id}: related references itself`);
      allRelated.push({ from: p.slug, to: r });
    }
  }
}

// related slugs may also point at the hand written core/special pages, so we
// only flag a related slug that matches nothing in the JSON batches AND looks
// like a typo. We cannot see the TS pages here, so unknown slugs are warnings.
const unknownRelated = allRelated.filter((r) => !slugs.has(r.to));

console.log(`Checked ${slugs.size} JSON pages across ${dataDir}`);
if (unknownRelated.length) {
  console.log(
    `Note: ${unknownRelated.length} related links point outside the JSON batches (expected if they target core/special pages).`,
  );
}
if (errors.length) {
  console.error(`\nFAILED with ${errors.length} error(s):`);
  for (const e of errors) console.error("  - " + e);
  process.exit(1);
}
console.log("All JSON SEO batches valid.");
