import { quickReference } from "./00-quick-reference.js";
import { extendOne } from "./01-extend-one.js";
import { narrowProperty } from "./02-narrow-property.js";
import { extendMany } from "./03-extend-many.js";
import { omitAndPartial } from "./04-omit-partial.js";
import { genericAndClass } from "./05-generic-and-class.js";
import { merging } from "./06-merging.js";
import { intersection } from "./07-intersection.js";

const sections: [string, () => void][] = [
  ["Quick reference", quickReference],
  ["1. Extending one interface", extendOne],
  ["2. Narrowing an inherited property", narrowProperty],
  ["3. Extending several interfaces", extendMany],
  ["4. Omit and Partial", omitAndPartial],
  ["5. Generic interfaces and classes", genericAndClass],
  ["6. Declaration merging", merging],
  ["7. Intersection types", intersection],
];

for (const [title, run] of sections) {
  console.log("=== " + title + " ===");
  run();
}
