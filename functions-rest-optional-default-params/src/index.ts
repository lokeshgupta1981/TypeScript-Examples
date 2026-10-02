import { quickReference } from "./00-quick-reference.js";
import { functionTypes } from "./01-function-types.js";
import { optionalAndDefault } from "./02-optional-default.js";
import { restParameters, readonlyRest } from "./03-rest-parameters.js";
import { spreadArguments } from "./04-spread-arguments.js";
import { tupleRest } from "./05-tuple-rest.js";
import { forwarding } from "./06-forwarding.js";

const sections: [string, () => void][] = [
  ["Quick reference", quickReference],
  ["Function declarations, expressions and types", functionTypes],
  ["Optional and default parameters", optionalAndDefault],
  ["Rest parameters", restParameters],
  ["readonly rest parameter", readonlyRest],
  ["Spreading arguments into a call", spreadArguments],
  ["Tuple types for rest parameters", tupleRest],
  ["Rest parameters in function types and forwarding", forwarding],
];

for (const [title, run] of sections) {
  console.log("=== " + title + " ===");
  run();
}
