export function specialTypes(): void {
  // 1. any: the compiler checks nothing
  let loose: any = "apple";
  const len = loose.length;                     // len = 5
  loose = 42;                                   // also allowed

  // 2. unknown: narrow before use
  const input: unknown = "banana";
  if (typeof input === "string") {
    const upper = input.toUpperCase();          // upper = "BANANA"
    console.log("upper =", upper);
  }

  // 3. A catch variable is unknown in strict mode
  try {
    JSON.parse("{");
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    // message = "Expected property name or '}' in JSON at position 1 (line 1 column 2)"
    console.log("message =", message);
  }

  // 4. void: returns nothing useful
  function log(text: string): void {
    console.log(text);
  }

  // 5. never: never returns normally
  function fail(text: string): never {
    throw new Error(text);
  }

  log("len = " + len + ", loose = " + loose);
  try {
    fail("stopped");
  } catch (err) {
    console.log("fail() threw:", (err as Error).message);
  }
}
