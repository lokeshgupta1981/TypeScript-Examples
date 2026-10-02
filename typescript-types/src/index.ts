import { quickReference } from "./00-quick-reference.js";
import { typeChecks } from "./01-type-checks.js";
import { primitiveTypes } from "./02-primitive-types.js";
import { inference } from "./03-inference.js";
import { satisfiesAndAsConst } from "./04-satisfies.js";
import { specialTypes } from "./05-special-types.js";
import { arraysAndTuples } from "./06-arrays-tuples.js";
import { objectTypes } from "./07-object-types.js";
import { combiningTypes } from "./08-combining-types.js";
import { functionTypes } from "./09-function-types.js";
import { generics } from "./10-generics.js";

const sections: [string, () => void][] = [
  ["Quick reference", quickReference],
  ["Type checks", typeChecks],
  ["Primitive types", primitiveTypes],
  ["Type inference", inference],
  ["as const and satisfies", satisfiesAndAsConst],
  ["any, unknown, void and never", specialTypes],
  ["Arrays and tuples", arraysAndTuples],
  ["Object types", objectTypes],
  ["Union, literal and intersection types", combiningTypes],
  ["Function types", functionTypes],
  ["Generics", generics],
];

for (const [title, run] of sections) {
  console.log("=== " + title + " ===");
  run();
}
