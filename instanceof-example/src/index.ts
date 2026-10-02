import { quickReference } from "./00-quick-reference.js";
import { howItWorks } from "./01-how-it-works.js";
import { narrowing } from "./02-narrowing.js";
import { builtIn } from "./03-built-in.js";
import { interfaces } from "./04-interfaces.js";
import { discriminatedUnion } from "./05-discriminated-union.js";

const sections: [string, () => void][] = [
  ["Quick reference", quickReference],
  ["1. How instanceof works", howItWorks],
  ["2. Narrowing with instanceof", narrowing],
  ["3. Built-in types and errors", builtIn],
  ["4. Interfaces: in operator and type guards", interfaces],
  ["5. Discriminated unions", discriminatedUnion],
];

for (const [title, run] of sections) {
  console.log("=== " + title + " ===");
  run();
}
