export function quickReference(): void {
  // 1. Function type
  type Greet = (name: string) => string;
  const greet: Greet = (name) => "Hi, " + name;
  const hi = greet("Lokesh");                   // hi = "Hi, Lokesh"
  console.log(hi);

  // 2. Optional and default parameters
  function label(name: string, age?: number, city = "Delhi"): string {
    return name + " " + (age ?? "?") + " " + city;
  }
  const l1 = label("Raj");                      // l1 = "Raj ? Delhi"
  const l2 = label("Lokesh", 37, "Pune");       // l2 = "Lokesh 37 Pune"
  console.log(l1, l2);

  // 3. Rest parameter collects the arguments into an array
  function sum(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
  }
  const none = sum();                           // none = 0
  const total = sum(37, 35, 40);                // total = 112
  console.log(none, total);

  // 4. Fixed parameters before the rest parameter
  function introduce(greeting: string, ...names: string[]): string {
    return greeting + " " + names.join(", ");
  }
  const text = introduce("Hi", "Lokesh", "Raj"); // text = "Hi Lokesh, Raj"
  console.log(text);

  // 5. Spread an array into a call
  const ages = [37, 35, 40];
  const all = sum(...ages);                     // all = 112
  const oldest = Math.max(...ages);             // oldest = 40
  console.log(all, oldest);

  // 6. Tuple type for the rest parameter
  function describe(...args: [name: string, age: number]): string {
    return args[0] + " is " + args[1];
  }
  const info = describe("Lokesh", 37);          // info = "Lokesh is 37"
  console.log(info);
}
