import { quickReference } from "./00-quick-reference.js";
import { objectLiteral } from "./01-object-literal.js";
import { satisfiesUser } from "./02-satisfies.js";
import { assertion } from "./03-assertion.js";
import { spreadCopy } from "./04-spread-copy.js";
import { factory } from "./05-factory.js";
import { fromClass } from "./06-class.js";
import { fromJson } from "./07-from-json.js";

const sections: [string, () => void][] = [
  ["Quick reference", quickReference],
  ["2. Object literal with a type annotation", objectLiteral],
  ["3. satisfies", satisfiesUser],
  ["4. Type assertion and Partial", assertion],
  ["5. Copying with spread and structuredClone", spreadCopy],
  ["6. Factory function", factory],
  ["7. Class that implements the interface", fromClass],
  ["8. Objects from JSON", fromJson],
];

for (const [title, run] of sections) {
  console.log("=== " + title + " ===");
  run();
}
