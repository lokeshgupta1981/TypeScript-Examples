export function globalThisExample(): void {
  // 1. Create the global once at startup
  globalThis.requestCount = 0;

  // 2. Change it anywhere
  globalThis.requestCount += 1;
  requestCount += 1;                            // same variable

  // 3. Read it anywhere
  const total = globalThis.requestCount;        // total = 2
  const exists = "requestCount" in globalThis;  // exists = true

  // 4. One object, several names (Node.js)
  const same = globalThis === global;           // same = true

  console.log("total =", total, "| exists =", exists, "| same =", same);
}
