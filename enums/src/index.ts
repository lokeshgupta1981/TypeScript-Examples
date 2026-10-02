import { quickReference } from "./00-quick-reference.js";
import { numericEnums } from "./01-numeric.js";
import { stringEnums } from "./02-string.js";
import { heterogeneousEnums } from "./03-heterogeneous.js";
import { reverseMappingAndIteration } from "./04-reverse-iterate.js";
import { stringToEnum } from "./05-string-to-enum.js";
import { constEnums } from "./06-const-enum.js";
import { asConstAlternative } from "./07-as-const.js";

const sections: [string, () => void][] = [
  ["Quick reference", quickReference],
  ["Numeric enums", numericEnums],
  ["String enums", stringEnums],
  ["Heterogeneous enums", heterogeneousEnums],
  ["Reverse mapping and iteration", reverseMappingAndIteration],
  ["String to enum", stringToEnum],
  ["const enums", constEnums],
  ["as const object alternative", asConstAlternative],
];

for (const [title, run] of sections) {
  console.log("=== " + title + " ===");
  run();
}
