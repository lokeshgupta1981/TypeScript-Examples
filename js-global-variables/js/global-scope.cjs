// Runs code as a classic script (not a module) with vm.runInThisContext,
// the way a browser runs a plain <script> tag.
const vm = require("node:vm");

console.log("--- Top-level declarations in a classic script ---");
vm.runInThisContext(`
  var appName = "Shop";
  let apiBaseUrl = "/api";
  const maxUsers = 10;
  function greet() {}

  console.log("var   ->", Object.hasOwn(globalThis, "appName"));
  console.log("let   ->", Object.hasOwn(globalThis, "apiBaseUrl"));
  console.log("const ->", Object.hasOwn(globalThis, "maxUsers"));
  console.log("function ->", Object.hasOwn(globalThis, "greet"));
`);

console.log("--- A second script shares the global scope ---");
vm.runInThisContext(`console.log("apiBaseUrl =", apiBaseUrl);`);
try {
  vm.runInThisContext(`let apiBaseUrl = "/v2";`);
} catch (e) {
  console.log(String(e));
}

console.log("--- Temporal dead zone at the top level ---");
try {
  vm.runInThisContext(`console.log(early); let early = 1;`);
} catch (e) {
  console.log(String(e));
}

console.log("--- Implicit global in sloppy mode ---");
vm.runInThisContext(`
  function countRequest() { requestCount = 1; }
  countRequest();
  console.log("requestCount =", requestCount, "| on globalThis:", Object.hasOwn(globalThis, "requestCount"));
`);

console.log("--- The same code in strict mode ---");
try {
  vm.runInThisContext(`
    "use strict";
    function countHit() { hitCount = 1; }
    countHit();
  `);
} catch (e) {
  console.log(String(e));
}

console.log("--- var x = y = 1 creates a global y ---");
vm.runInThisContext(`
  function setUp() { var local = shared = 1; }
  setUp();
  console.log("typeof local =", typeof local, "| shared =", shared);
`);

console.log("--- CommonJS file (this file) ---");
var commonJsVar = "Shop";
console.log("var on globalThis:", Object.hasOwn(globalThis, "commonJsVar"));
