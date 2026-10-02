export function functionTypes(): void {
  // 1. Parameter and return types
  function add(a: number, b: number): number {
    return a + b;
  }

  // 2. Optional and default parameters
  function greet(name: string, greeting = "Hello", suffix?: string): string {
    return greeting + ", " + name + (suffix ?? "");
  }

  // 3. A function type
  type Compare = (a: number, b: number) => number;
  const byValue: Compare = (a, b) => a - b;

  const sum = add(2, 3);                        // sum = 5
  const text = greet("Raj");                    // text = "Hello, Raj"
  const sorted = [40, 35, 37].sort(byValue);    // sorted = [35, 37, 40]

  console.log("sum =", sum, "text =", text, "sorted =", sorted);
}
