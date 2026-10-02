import { quickReference } from "./00-quick-reference.js";
import { pushItems, pushLargeArray } from "./01-push.js";
import { unshiftItems } from "./02-unshift.js";
import { spliceInsert } from "./03-splice.js";
import { addToNewArray, addToReadonlyArray } from "./04-new-array.js";
import { typedAdds } from "./05-typing.js";
import { addIfMissing } from "./06-unique.js";

console.log("=== Quick reference ===");
quickReference();

console.log("\n=== 1. push() ===");
pushItems();
pushLargeArray();

console.log("\n=== 2. unshift() ===");
unshiftItems();

console.log("\n=== 3. splice() ===");
spliceInsert();

console.log("\n=== 4. New array: spread, concat(), toSpliced() ===");
addToNewArray();
addToReadonlyArray();

console.log("\n=== 5. Typed adds ===");
typedAdds();

console.log("\n=== 6. Add only if missing ===");
addIfMissing();
