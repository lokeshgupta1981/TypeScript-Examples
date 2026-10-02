export function forwarding(): void {
  // 1. Rest parameter in a function type
  type Logger = (level: string, ...messages: string[]) => void;
  const log: Logger = (level, ...messages) => console.log("[" + level + "] " + messages.join(" "));
  log("info", "apple", "banana");               // [info] apple banana

  // 2. Forward any arguments to another function, fully typed
  function withLog<A extends unknown[], R>(fn: (...args: A) => R, ...args: A): R {
    console.log("calling " + fn.name);
    return fn(...args);
  }
  function add(a: number, b: number): number {
    return a + b;
  }
  const result = withLog(add, 5, 3);            // result = 8
  console.log(result);
}
