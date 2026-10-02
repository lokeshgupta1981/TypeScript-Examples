import { quickReference } from "./00-quick-reference.js";
import { basicOverride } from "./01-basic-override.js";
import { superCalls } from "./02-super.js";
import { signatureRules } from "./03-signature-rules.js";
import { abstractMethods } from "./04-abstract.js";

const sections: [string, () => void][] = [
  ["Quick reference", quickReference],
  ["1. Overriding a method", basicOverride],
  ["3. Calling the parent with super", superCalls],
  ["4. Signature rules", signatureRules],
  ["5. Abstract methods", abstractMethods],
];

for (const [title, run] of sections) {
  console.log("=== " + title + " ===");
  run();
}
