import { quickReference } from "./00-quick-reference.js";
import { optionalParameters } from "./01-optional.js";
import { defaultValues } from "./02-default.js";
import { undefinedVsNull } from "./03-undefined-null.js";
import { parameterOrder } from "./04-order.js";
import { optionsObject } from "./05-options-object.js";
import { functionTypes } from "./06-function-types.js";

const sections: [string, () => void][] = [
  ["Quick reference", quickReference],
  ["Optional parameters", optionalParameters],
  ["Default values", defaultValues],
  ["Omitted, undefined and null", undefinedVsNull],
  ["Parameter order", parameterOrder],
  ["Options object with defaults", optionsObject],
  ["Function types and callbacks", functionTypes],
];

for (const [title, run] of sections) {
  console.log("=== " + title + " ===");
  run();
}
