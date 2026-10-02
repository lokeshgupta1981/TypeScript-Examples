import { quickReference } from "./00-quick-reference.js";
import { declareArrays, elementTypeFromArray } from "./01-declare.js";
import { addRemoveUpdate, outOfBounds } from "./02-add-remove-update.js";
import { findAndFilter } from "./03-find-filter.js";
import { sortObjects } from "./04-sort.js";
import { transformAndGroup } from "./05-transform-group.js";
import { copyAndUpdate } from "./06-copy-update.js";

console.log("=== Quick reference ===");
quickReference();

console.log("\n=== 1. Declaring an array of objects ===");
declareArrays();
elementTypeFromArray();

console.log("\n=== 2. Adding, removing and updating ===");
addRemoveUpdate();
outOfBounds();

console.log("\n=== 3. Finding and filtering ===");
findAndFilter();

console.log("\n=== 4. Sorting ===");
sortObjects();

console.log("\n=== 5. Transforming and grouping ===");
transformAndGroup();

console.log("\n=== 6. Copying and updating without mutation ===");
copyAndUpdate();
