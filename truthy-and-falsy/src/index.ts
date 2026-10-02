import { quickReference } from "./00-quick-reference.js";
import { falsyValues } from "./01-falsy.js";
import { truthyValues } from "./02-truthy.js";
import { booleanContexts } from "./03-boolean-contexts.js";
import { convertToBoolean } from "./04-convert.js";
import { truthinessNarrowing } from "./05-narrowing.js";
import { pitfalls } from "./06-pitfalls.js";

const sections: [string, () => void][] = [
  ["Quick reference", quickReference],
  ["Falsy values", falsyValues],
  ["Truthy values", truthyValues],
  ["Boolean contexts", booleanContexts],
  ["Converting to boolean", convertToBoolean],
  ["Truthiness narrowing", truthinessNarrowing],
  ["Pitfalls", pitfalls],
];

for (const [title, run] of sections) {
  console.log("=== " + title + " ===");
  run();
}
