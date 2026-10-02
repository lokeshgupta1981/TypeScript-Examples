import { quickReference } from "./00-quick-reference.js";
import { createMaps } from "./01-create.js";
import { basicOperations } from "./02-operations.js";
import { handleMissingKeys } from "./03-get-undefined.js";
import { iterateMaps } from "./04-iterate.js";
import { convertMaps } from "./05-convert.js";
import { sortAndGroup } from "./06-sort-group.js";
import { keyTypes } from "./07-keys.js";

const demos: Array<[string, () => void]> = [
  ["Quick reference", quickReference],
  ["1. Create a Map", createMaps],
  ["2. Add, read, update and delete", basicOperations],
  ["3. Handle missing keys", handleMissingKeys],
  ["4. Iterate", iterateMaps],
  ["5. Convert to object, array and JSON", convertMaps],
  ["6. Sort and group", sortAndGroup],
  ["7. Key types", keyTypes],
];

for (const [title, run] of demos) {
  console.log("\n=== " + title + " ===");
  run();
}
