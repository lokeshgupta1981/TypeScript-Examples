import { strictChecks } from "./01-strict.js";
import { uncheckedIndex } from "./02-unchecked-index.js";
import { verbatimImports } from "./03-verbatim-module-syntax.js";
import { erasableSyntax } from "./04-erasable-syntax.js";

console.log("=== strict ===");
strictChecks();

console.log("=== noUncheckedIndexedAccess ===");
uncheckedIndex();

console.log("=== verbatimModuleSyntax ===");
verbatimImports();

console.log("=== erasableSyntaxOnly ===");
erasableSyntax();
