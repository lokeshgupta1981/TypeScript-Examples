import { quickReference } from "./00-quick-reference.js";
import { creatingArrays, fixedLengthArrays, unionObjectNestedArrays } from "./01-creating-arrays.js";
import { readingElements } from "./02-reading-elements.js";
import { copyingMethods, defaultSortPitfall } from "./03-copying-methods.js";
import { looping } from "./04-looping.js";
import { copyAndMerge, deepCopy } from "./05-copy-merge.js";
import { readonlyArrays } from "./06-readonly-arrays.js";
import { tuples } from "./07-tuples.js";

console.log("=== Quick reference ===");
quickReference();

console.log("\n=== 1. Creating typed arrays ===");
creatingArrays();
fixedLengthArrays();
unionObjectNestedArrays();

console.log("\n=== 2. Reading elements ===");
readingElements();

console.log("\n=== 4. ES2023 copying methods ===");
copyingMethods();
defaultSortPitfall();

console.log("\n=== 5. Looping ===");
looping();

console.log("\n=== 6. Copying and merging ===");
copyAndMerge();
deepCopy();

console.log("\n=== 7. Read-only arrays ===");
readonlyArrays();

console.log("\n=== 8. Tuples ===");
tuples();
