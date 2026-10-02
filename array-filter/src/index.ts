import { quickReference } from "./00-quick-reference.js";
import { howFilterWorks, namedCallback } from "./01-how-filter-works.js";
import { byProperty, filterByKey } from "./02-by-property.js";
import { byListOfValues, nestedAndOptional } from "./03-lists-nested.js";
import { filterStrings } from "./04-strings.js";
import { narrowing, explicitTypeGuard } from "./05-narrowing.js";
import { commonMistakes } from "./06-mistakes.js";

console.log("=== Quick reference ===");
quickReference();

console.log("\n=== 1. How filter() works ===");
howFilterWorks();
namedCallback();

console.log("\n=== 2. Filter objects by property ===");
byProperty();
filterByKey();

console.log("\n=== 3. List of values, nested and optional properties ===");
byListOfValues();
nestedAndOptional();

console.log("\n=== 4. Strings ===");
filterStrings();

console.log("\n=== 5. Type narrowing ===");
narrowing();
explicitTypeGuard();

console.log("\n=== 6. Common mistakes ===");
commonMistakes();
