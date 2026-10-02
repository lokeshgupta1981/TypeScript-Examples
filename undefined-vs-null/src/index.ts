import { quickReference } from "./00-quick-reference.js";
import { whereUndefinedComesFrom } from "./01-undefined.js";
import { whereNullComesFrom } from "./02-null.js";
import { differences } from "./03-differences.js";
import { strictNullChecks } from "./04-strict-null-checks.js";
import { nullishCoalescing } from "./05-nullish.js";
import { optionalChaining } from "./06-optional-chaining.js";

const sections: [string, () => void][] = [
  ["Quick reference", quickReference],
  ["Where undefined comes from", whereUndefinedComesFrom],
  ["Where null comes from", whereNullComesFrom],
  ["Differences", differences],
  ["strictNullChecks", strictNullChecks],
  ["?? vs ||", nullishCoalescing],
  ["Optional chaining", optionalChaining],
];

for (const [title, run] of sections) {
  console.log("=== " + title + " ===");
  run();
}
