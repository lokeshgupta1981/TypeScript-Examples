export async function quickReference(): Promise<void> {
  // 1. Custom error class
  class AgeError extends Error {
    constructor(message: string, options?: ErrorOptions) {
      super(message, options);
      this.name = "AgeError";
    }
  }

  // 2. Throw an Error object
  function parseAge(text: string): number {
    if (!/^\d+$/.test(text)) {
      throw new AgeError("Invalid age: " + text);
    }
    return Number(text);
  }

  // 3. try / catch / finally; err is unknown
  try {
    parseAge("abc");
  } catch (err) {
    if (err instanceof AgeError) {
      console.log(err.message);                 // Invalid age: abc
    } else {
      throw err;                                // rethrow what we cannot handle
    }
  } finally {
    console.log("done");                        // always runs
  }

  // 4. Wrap a low-level error with cause (ES2022)
  try {
    JSON.parse("{bad");
  } catch (err) {
    const wrapped = new AgeError("Cannot read ages", { cause: err });
    console.log(wrapped.cause instanceof SyntaxError); // true
  }

  // 5. Async errors with await
  async function loadAge(name: string): Promise<number> {
    throw new AgeError("No age for " + name);
  }
  try {
    await loadAge("John");
  } catch (err) {
    console.log((err as Error).message);        // No age for John
  }
}
