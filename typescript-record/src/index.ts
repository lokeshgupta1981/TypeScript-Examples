import { quickReference } from "./00-quick-reference.js";
import { stringKeys, otherKeyTypes } from "./01-string-keys.js";
import { unionKeys } from "./02-union-keys.js";
import { checkKey } from "./03-check-key.js";
import { iterateRecord, iterateUnionKeys, keyOrder } from "./04-iterate.js";
import { transformRecords } from "./05-transform.js";
import { annotationVsSatisfies } from "./06-satisfies.js";

console.log("=== Quick reference ===");
quickReference();

console.log("\n=== 2. Record<string, V> ===");
stringKeys();
otherKeyTypes();

console.log("\n=== 3. Union keys ===");
unionKeys();

console.log("\n=== 4. Checking a key ===");
checkKey();

console.log("\n=== 5. Iterating ===");
iterateRecord();
iterateUnionKeys();
keyOrder();

console.log("\n=== 6. Transforming ===");
transformRecords();

console.log("\n=== 7. Annotation vs satisfies ===");
annotationVsSatisfies();
