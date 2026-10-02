import { quickReference } from "./00-quick-reference.js";
import { runtimeKinds } from "./01-runtime.js";
import { keyTypes } from "./02-key-types.js";
import { knownKeys, missingKeys } from "./03-known-keys.js";
import { userKeys } from "./04-user-keys.js";
import { jsonAndCopies } from "./05-json-copy.js";
import { convert } from "./06-convert.js";

console.log("=== Quick reference ===");
quickReference();

console.log("\n=== 1. Type vs class ===");
runtimeKinds();

console.log("\n=== 3.1. Key types ===");
keyTypes();

console.log("\n=== 3.2. Known keys and missing keys ===");
knownKeys();
missingKeys();

console.log("\n=== 3.3. Keys from user input ===");
userKeys();

console.log("\n=== 3.4. JSON and copies ===");
jsonAndCopies();

console.log("\n=== 4. Converting ===");
convert();
