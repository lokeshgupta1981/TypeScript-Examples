import { quickReference } from "./00-quick-reference.js";
import { startAndEnd } from "./01-syntax.js";
import { negativeIndexes } from "./02-negative-indexes.js";
import { commonTasks } from "./03-common-tasks.js";
import { outOfRange } from "./04-out-of-range.js";
import { shallowCopy } from "./05-shallow-copy.js";
import { sliceVsSplice } from "./06-slice-vs-splice.js";
import { sliceTypes } from "./07-types.js";

console.log("=== Quick reference ===");
quickReference();

console.log("\n=== 1. start and end ===");
startAndEnd();

console.log("\n=== 2. Negative indexes ===");
negativeIndexes();

console.log("\n=== 3. Common tasks ===");
commonTasks();

console.log("\n=== 4. Out-of-range values ===");
outOfRange();

console.log("\n=== 5. Shallow copy ===");
shallowCopy();

console.log("\n=== 6. slice() vs splice() ===");
sliceVsSplice();

console.log("\n=== 7. Types ===");
sliceTypes();
