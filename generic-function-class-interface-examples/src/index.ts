import { quickReference } from "./00-quick-reference.js";
import { genericFunctions, anyLosesTypes } from "./01-generic-functions.js";
import { constraints, keyofConstraint } from "./02-constraints.js";
import { defaultTypeParameters } from "./03-default-type-parameters.js";
import { constTypeParameters } from "./04-const-type-parameters.js";
import { genericInterfaces } from "./05-generic-interfaces.js";
import { genericClasses, implementInterface } from "./06-generic-classes.js";
import { typesAreErased } from "./07-runtime.js";

const sections: [string, () => void][] = [
  ["Quick reference", quickReference],
  ["Generic functions", genericFunctions],
  ["any loses the type", anyLosesTypes],
  ["Constraints with extends", constraints],
  ["Constraints with keyof", keyofConstraint],
  ["Default type parameters", defaultTypeParameters],
  ["const type parameters", constTypeParameters],
  ["Generic interfaces", genericInterfaces],
  ["Generic classes", genericClasses],
  ["Class implementing a generic interface", implementInterface],
  ["Types are erased at runtime", typesAreErased],
];

for (const [title, run] of sections) {
  console.log("=== " + title + " ===");
  run();
}
