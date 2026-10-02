import { quickReference } from "./00-quick-reference.js";
import { createSets } from "./01-create.js";
import { basicOperations } from "./02-basic-operations.js";
import { iterateSets } from "./03-iterate.js";
import { convertSets } from "./04-convert.js";
import { setOperations, setOperationsBeforeES2025 } from "./05-set-operations.js";
import { equalityRules, uniqueByKey } from "./06-objects.js";
import { readonlyAndWeakSet } from "./07-readonly-weakset.js";

console.log("=== Quick reference ===");
quickReference();

console.log("\n=== 1. Creating a Set ===");
createSets();

console.log("\n=== 2. Adding, checking and removing ===");
basicOperations();

console.log("\n=== 3. Iterating ===");
iterateSets();

console.log("\n=== 4. Converting ===");
convertSets();

console.log("\n=== 5. Set operations (ES2025) ===");
setOperations();
setOperationsBeforeES2025();

console.log("\n=== 6. Equality and objects ===");
equalityRules();
uniqueByKey();

console.log("\n=== 7. ReadonlySet and WeakSet ===");
readonlyAndWeakSet();
