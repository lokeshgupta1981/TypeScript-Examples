export function shadowing(): void {
  globalThis.requestCount = 5;

  function handleRequest(): void {
    const requestCount = 1;                     // local, hides the global
    const local = requestCount;                 // local = 1
    const global = globalThis.requestCount;     // global = 5
    console.log("local =", local, "| global =", global);
  }

  handleRequest();
}
