// An ES module: top-level declarations stay in the module.
var appName = "Shop";
let apiBaseUrl = "/api";

console.log("--- ES module ---");
console.log("var on globalThis:", Object.hasOwn(globalThis, "appName"));
console.log("let on globalThis:", Object.hasOwn(globalThis, "apiBaseUrl"));
console.log("top-level this:", this);

try {
  total = 5;
} catch (e) {
  console.log(String(e));
}
