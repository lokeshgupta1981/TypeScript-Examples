export function tupleRest(): void {
  // 1. Labeled tuple: exactly a name and an age
  function describe(...args: [name: string, age: number]): string {
    return args[0] + " is " + args[1];
  }
  const d = describe("Lokesh", 37);             // d = "Lokesh is 37"
  console.log(d);

  // 2. Optional tuple element
  function tag(...args: [fruit: string, count?: number]): string {
    const [fruit, count = 1] = args;
    return fruit + " x" + count;
  }
  const t1 = tag("apple");                      // t1 = "apple x1"
  const t2 = tag("banana", 3);                  // t2 = "banana x3"
  console.log(t1, t2);

  // 3. Reuse a function's parameter list
  type DescribeArgs = Parameters<typeof describe>; // [name: string, age: number]
  const args: DescribeArgs = ["John", 40];
  const d2 = describe(...args);                 // d2 = "John is 40"
  console.log(d2);
}
