import { quickReference } from "./00-quick-reference.js";
import { findObject, findStopsEarly } from "./01-find.js";
import { handleUndefined } from "./02-undefined.js";
import { narrowingFind } from "./03-narrowing.js";
import { findIndexAndReplace } from "./04-find-index.js";
import { findLastExamples } from "./05-find-last.js";
import { searchByValue, includesWithLiteralTypes } from "./06-by-value.js";

console.log("=== Quick reference ===");
quickReference();

console.log("\n=== 1. find() ===");
findObject();
findStopsEarly();

console.log("\n=== 2. Handling undefined ===");
handleUndefined();

console.log("\n=== 3. Narrowing with find() ===");
narrowingFind();

console.log("\n=== 4. findIndex() ===");
findIndexAndReplace();

console.log("\n=== 5. findLast() and findLastIndex() ===");
findLastExamples();

console.log("\n=== 6. Search by value ===");
searchByValue();
includesWithLiteralTypes();
