import { quickReference } from "./00-quick-reference.js";
import { typeofResults, typeofTrap } from "./01-typeof.js";
import { numberIsFinite } from "./02-is-finite.js";
import { globalIsFinite, globalIsNaN } from "./02-03-global-functions.js";
import { numberIsNaN } from "./03-is-nan.js";
import { integers, quantityCheck } from "./04-integers.js";
import { convertStrings, regexCheck, helperCheck } from "./05-numeric-strings.js";
import { bigintValues, numberObjects } from "./06-bigint-and-number-objects.js";
import { narrowWithTypeof, guardUse, toNumberUse } from "./07-type-guard.js";
import { coercionTable, comparisonTable } from "./08-comparison-table.js";
import { truthyCheck, parseIntVsNumber, commas, rangeCheck } from "./09-faqs.js";

console.log("=== Quick reference ===");
quickReference();

console.log("\n=== 1. typeof ===");
typeofResults();
typeofTrap();

console.log("\n=== 2. Number.isFinite() vs isFinite() ===");
numberIsFinite();
globalIsFinite();

console.log("\n=== 3. Number.isNaN() vs isNaN() ===");
numberIsNaN();
globalIsNaN();
coercionTable();

console.log("\n=== 4. Number.isInteger() and Number.isSafeInteger() ===");
integers();
quantityCheck();

console.log("\n=== 5. Numeric strings ===");
convertStrings();
regexCheck();
helperCheck();

console.log("\n=== 6. BigInt and Number objects ===");
bigintValues();
numberObjects();

console.log("\n=== 7. TypeScript type guard ===");
narrowWithTypeof();
guardUse();
toNumberUse();

console.log("\n=== 8. Comparison table ===");
comparisonTable();

console.log("\n=== 9. FAQs ===");
truthyCheck();
parseIntVsNumber();
commas();
rangeCheck();
