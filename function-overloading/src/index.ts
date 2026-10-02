import { quickReference } from "./00-quick-reference.js";
import { overloadSignatures } from "./01-overload-signatures.js";
import { parameterCount } from "./02-parameter-count.js";
import { overloadOrder } from "./03-order.js";
import { classOverloads } from "./04-classes.js";
import { functionTypes } from "./05-function-types.js";
import { alternatives } from "./06-alternatives.js";

const sections: [string, () => void][] = [
  ["Quick reference", quickReference],
  ["Overload and implementation signatures", overloadSignatures],
  ["Different number of parameters", parameterCount],
  ["Order of overloads", overloadOrder],
  ["Constructor and method overloads", classOverloads],
  ["Function types and interfaces", functionTypes],
  ["Alternatives to overloads", alternatives],
];

for (const [title, run] of sections) {
  console.log("=== " + title + " ===");
  run();
}
