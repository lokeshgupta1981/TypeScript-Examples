import { quickReference } from "./00-quick-reference.js";
import { literalKinds } from "./01-literal-kinds.js";
import { widening } from "./02-widening.js";
import { deriveUnions } from "./03-as-const.js";
import { narrowingLiterals } from "./04-narrowing.js";
import { recordOfLiterals } from "./05-record.js";

const sections: [string, () => void][] = [
  ["Quick reference", quickReference],
  ["String, number and boolean literals", literalKinds],
  ["Widening", widening],
  ["Deriving unions with as const", deriveUnions],
  ["Narrowing literal types", narrowingLiterals],
  ["Record with literal keys", recordOfLiterals],
];

for (const [title, run] of sections) {
  console.log("=== " + title + " ===");
  run();
}
