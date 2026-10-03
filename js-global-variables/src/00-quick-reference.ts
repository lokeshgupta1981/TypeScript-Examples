// 1. A top-level const in an ES module stays in the module
const appName = "Shop";
const inGlobal = "appName" in globalThis;     // inGlobal = false

export function quickReference(): void {
  // 2. A real global variable with globalThis (ES2020)
  globalThis.requestCount = 0;
  globalThis.requestCount++;
  const count = requestCount;                   // count = 1

  // 3. Implicit global: strict mode and modules reject it
  // total = 5;                                 // ReferenceError: total is not defined

  // 4. Shadowing: a local name hides the global one
  {
    const requestCount = 100;
    const local = requestCount;                 // local = 100
    console.log("local =", local);
  }

  // 5. Better: a frozen config object in its own module
  const config = Object.freeze({ appName: "Shop", apiBaseUrl: "/api" });
  // config.appName = "Blog";                   // error TS2540, TypeError at runtime

  // 6. Config values from environment variables (Node.js)
  const apiBaseUrl = process.env.API_BASE_URL ?? "/api";   // apiBaseUrl = "/api"

  // 7. TypeScript: declare the global once, in a .d.ts file
  // declare global { var requestCount: number; }

  console.log("appName =", appName, "| inGlobal =", inGlobal);
  console.log("count =", count);
  console.log("config =", config);
  console.log("apiBaseUrl =", apiBaseUrl);
}
