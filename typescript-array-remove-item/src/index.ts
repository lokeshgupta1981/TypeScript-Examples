import { quickReference } from "./00-quick-reference.js";
import { popAndShift } from "./01-pop-shift.js";
import { spliceByIndex } from "./02-splice-index.js";
import { removeByValue, missingValueBug, removeObjectByProperty } from "./03-by-value.js";
import { removeAllMatches } from "./04-filter.js";
import { removeFromCopy } from "./05-keep-original.js";
import { removeInLoopBug, removeInLoopFixed } from "./06-loop.js";
import { deleteOperator } from "./07-delete.js";
import { clearArray } from "./08-clear.js";

console.log("=== Quick reference ===");
quickReference();

console.log("\n=== 1. pop() and shift() ===");
popAndShift();

console.log("\n=== 2. splice() by index ===");
spliceByIndex();

console.log("\n=== 3. Remove by value ===");
removeByValue();
missingValueBug();
removeObjectByProperty();

console.log("\n=== 4. filter() ===");
removeAllMatches();

console.log("\n=== 5. Keep the original ===");
removeFromCopy();

console.log("\n=== 6. Removing inside a loop ===");
removeInLoopBug();
removeInLoopFixed();

console.log("\n=== 7. delete operator ===");
deleteOperator();

console.log("\n=== 8. Empty an array ===");
clearArray();
