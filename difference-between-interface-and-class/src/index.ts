import { quickReference } from "./00-quick-reference.js";
import { sameShape } from "./01-same-shape.js";
import { abstractClass } from "./02-abstract-class.js";
import { structural } from "./03-structural.js";
import { inheritance } from "./04-inheritance.js";
import { classOnly } from "./05-class-only.js";

const sections: [string, () => void][] = [
  ["Quick reference", quickReference],
  ["1. Same shape as an interface and a class", sameShape],
  ["2. Abstract class", abstractClass],
  ["3. Structural typing with classes", structural],
  ["4. Inheritance", inheritance],
  ["5. Class-only features", classOnly],
];

for (const [title, run] of sections) {
  console.log("=== " + title + " ===");
  run();
}
