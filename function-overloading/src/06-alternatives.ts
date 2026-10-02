export function alternatives(): void {
  // 1. Union parameter: one signature, same return type
  function len(value: string | unknown[]): number {
    return value.length;
  }
  const input = Math.random() > 0.5 ? "apple" : ["apple", "banana"];
  const size = len(input);                      // size = 5 or 2
  console.log(size === 5 || size === 2);        // true

  // 2. Optional parameter: trailing arguments that may be missing
  function label(name: string, age?: number): string {
    return age === undefined ? name : name + " (" + age + ")";
  }
  const l1 = label("Raj");                      // l1 = "Raj"
  const l2 = label("Lokesh", 37);               // l2 = "Lokesh (37)"
  console.log(l1, l2);

  // 3. Generic: the return type is the argument type
  function firstOf<T>(items: T[]): T | undefined {
    return items[0];
  }
  const fruit = firstOf(["apple", "banana"]);   // fruit = "apple" (string | undefined)
  console.log(fruit);
}
