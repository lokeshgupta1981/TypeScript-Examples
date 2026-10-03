// Top-level declarations of an ES module
var appName = "Shop";
let apiBaseUrl = "/api";

const varOnGlobal = "appName" in globalThis;  // varOnGlobal = false
const letOnGlobal = "apiBaseUrl" in globalThis;   // letOnGlobal = false

export function moduleScope(): void {
  console.log("appName =", appName, "| apiBaseUrl =", apiBaseUrl);
  console.log("varOnGlobal =", varOnGlobal, "| letOnGlobal =", letOnGlobal);
}
