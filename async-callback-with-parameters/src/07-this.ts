export function thisInCallbacks(): void {
  class Counter {
    count = 0;

    // 1. Method: loses "this" when passed as a callback
    addMethod(): void {
      this.count++;
    }

    // 2. Arrow function property: keeps "this"
    addArrow = (): void => {
      this.count++;
    };
  }

  const counter = new Counter();
  [1, 2, 3].forEach(counter.addArrow);
  console.log(counter.count);                   // 3

  [1, 2].forEach(() => counter.addMethod());    // wrap the method in an arrow
  console.log(counter.count);                   // 5

  try {
    [1].forEach(counter.addMethod);             // compiles, fails at runtime
  } catch (err) {
    console.log((err as Error).message);        // Cannot read properties of undefined (reading 'count')
  }
}
