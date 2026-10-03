import { shallowCopyMistake } from "./08-mistakes.js";
import { quickReference } from "./00-quick-reference.js";
import { replacerBasics, allowList } from "./01-replacer.js";
import { partialMasks } from "./02-partial-mask.js";
import { deepCopy } from "./03-deep-copy.js";
import { freeText } from "./04-free-text.js";
import { toJsonExample } from "./05-tojson.js";
import { consoleLogging } from "./06-console.js";
import { pinoRedact } from "./07-pino.js";

console.log("=== Quick reference ===");
quickReference();

console.log("\n=== 2. JSON.stringify() replacer ===");
replacerBasics();
allowList();

console.log("\n=== 3. Partial masks ===");
partialMasks();

console.log("\n=== 4. Masked copy ===");
deepCopy();

console.log("\n=== 5. Free text ===");
freeText();

console.log("\n=== 6. toJSON() ===");
toJsonExample();

console.log("\n=== 7.1. console ===");
consoleLogging();

console.log("\n=== 9. Shallow copy mistake ===");
shallowCopyMistake();

console.log("\n=== 7.2. pino redact ===");
pinoRedact();
