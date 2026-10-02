import { quickReference } from "./00-quick-reference.js";
import { mapExamples, mapObjects } from "./01-map.js";
import { flatMapExamples, flatMapObjects } from "./02-flatmap.js";
import { mapFlatExamples } from "./03-map-flat.js";
import { filterAndMap, removeUndefined } from "./04-filter-and-map.js";
import { mistakes } from "./05-mistakes.js";

console.log("=== Quick reference ===");
quickReference();

console.log("\n=== 1. map() ===");
mapExamples();
mapObjects();

console.log("\n=== 2. flatMap() ===");
flatMapExamples();
flatMapObjects();

console.log("\n=== 3. map() + flat() vs flatMap() ===");
mapFlatExamples();

console.log("\n=== 4. Filter and map in one pass ===");
filterAndMap();
removeUndefined();

console.log("\n=== 5. Common mistakes ===");
await mistakes();
