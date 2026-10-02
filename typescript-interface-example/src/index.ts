import { quickReference } from "./00-quick-reference.js";
import { declareAndUse } from "./01-declare-and-use.js";
import { optionalAndReadonly } from "./02-optional-readonly.js";
import { methods } from "./03-methods.js";
import { indexSignatures } from "./04-index-signatures.js";
import { nestedAndGeneric } from "./05-nested-and-generic.js";
import { implementsInClass } from "./06-implements.js";
import { satisfiesCheck } from "./07-satisfies.js";
import { interfaceVsType } from "./08-interface-vs-type.js";

const sections: [string, () => void][] = [
  ["Quick reference", quickReference],
  ["1. Declaring an interface", declareAndUse],
  ["2. Optional and readonly properties", optionalAndReadonly],
  ["3. Methods and function types", methods],
  ["4. Index signatures", indexSignatures],
  ["5. Nested and generic interfaces", nestedAndGeneric],
  ["6. Implementing an interface in a class", implementsInClass],
  ["7. satisfies", satisfiesCheck],
  ["8. Interface vs type alias", interfaceVsType],
];

for (const [title, run] of sections) {
  console.log("=== " + title + " ===");
  run();
}
