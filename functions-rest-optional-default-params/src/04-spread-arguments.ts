export function spreadArguments(): void {
  function sum(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
  }

  // 1. Spread an array into a rest parameter
  const ages = [37, 35, 40];
  const total = sum(...ages);                   // total = 112
  const more = sum(5, ...ages, 3);              // more = 120
  const oldest = Math.max(...ages);             // oldest = 40
  console.log(total, more, oldest);

  // 2. Spread into fixed parameters needs a tuple
  function person(name: string, age: number): string {
    return name + " is " + age;
  }
  const lokesh = ["Lokesh", 37] as const;       // type readonly ["Lokesh", 37]
  const p1 = person(...lokesh);                 // p1 = "Lokesh is 37"

  const raj: [string, number] = ["Raj", 35];
  const p2 = person(...raj);                    // p2 = "Raj is 35"
  console.log(p1, p2);
}
