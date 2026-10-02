import { quickReference } from "./00-quick-reference.js";
import { declaringUnions } from "./01-declaring.js";
import { sharedMembers } from "./02-shared-members.js";
import { narrowWithTypeof } from "./03-typeof.js";
import { narrowWithInstanceofAndIsArray } from "./04-instanceof-isarray.js";
import { narrowWithIn } from "./05-in-operator.js";
import { typePredicates } from "./06-type-predicates.js";
import { discriminatedUnions } from "./07-discriminated.js";
import { exhaustiveChecks } from "./08-exhaustive.js";
import { unionVsIntersection } from "./09-intersection.js";

const sections: [string, () => void][] = [
  ["Quick reference", quickReference],
  ["Declaring a union type", declaringUnions],
  ["Shared members", sharedMembers],
  ["Narrowing with typeof", narrowWithTypeof],
  ["Narrowing with Array.isArray() and instanceof", narrowWithInstanceofAndIsArray],
  ["Narrowing with in", narrowWithIn],
  ["Type predicates", typePredicates],
  ["Discriminated unions", discriminatedUnions],
  ["Exhaustive checks with never", exhaustiveChecks],
  ["Union vs intersection", unionVsIntersection],
];

for (const [title, run] of sections) {
  console.log("=== " + title + " ===");
  run();
}
