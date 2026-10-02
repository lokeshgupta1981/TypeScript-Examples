import { quickReference } from "./00-quick-reference.js";
import { vectorTypes, tuplePushLoophole } from "./01-vector-types.js";
import { createArrays } from "./02-create.js";
import { addRemoveRead } from "./03-add-read.js";
import { vectorMath } from "./04-vector-math.js";
import { typedArrays } from "./05-typed-arrays.js";

console.log("=== Quick reference ===");
quickReference();

console.log("\n=== 2. Vector types ===");
vectorTypes();
tuplePushLoophole();

console.log("\n=== 3. Creating an array of vectors ===");
createArrays();

console.log("\n=== 4. Adding, removing and reading ===");
addRemoveRead();

console.log("\n=== 5. Vector math ===");
vectorMath();

console.log("\n=== 6. Typed arrays ===");
typedArrays();
