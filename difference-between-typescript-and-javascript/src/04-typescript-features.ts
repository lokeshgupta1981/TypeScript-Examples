export function typescriptFeatures(): void {
  // 1. Type alias with a union of literal types
  type Size = "small" | "medium" | "large";
  const size: Size = "medium";

  // 2. Generic function
  function firstItem<T>(items: T[]): T | undefined {
    return items[0];
  }
  const first = firstItem(["apple", "banana"]); // first = "apple", type string | undefined

  // 3. Class with access modifiers
  class Counter {
    private count = 0;
    readonly name: string;
    constructor(name: string) { this.name = name; }
    increment(): number { return ++this.count; }
  }
  const visits = new Counter("visits");
  const count = visits.increment();             // count = 1

  // 4. satisfies: check the shape, keep the literal types
  const prices = { apple: 5, banana: 3 } satisfies Record<string, number>;
  const applePrice = prices.apple;              // applePrice = 5

  console.log("size =", size);
  console.log("first =", first);
  console.log("count =", count);
  console.log("applePrice =", applePrice);
}
