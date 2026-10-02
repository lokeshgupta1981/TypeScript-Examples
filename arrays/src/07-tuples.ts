export function tuples(): void {
  // 1. Fixed length, a type per position
  const person: [string, number] = ["Lokesh", 37];
  const age = person[1];                        // age = 37, typed number

  // 2. Labeled elements and an optional element
  type Point = [x: number, y: number, z?: number];
  const flat: Point = [1, 2];
  const solid: Point = [1, 2, 3];

  // 3. Destructuring
  const [name, years] = person;                 // name = "Lokesh", years = 37

  console.log("age =", age, "| flat =", flat, "| solid =", solid);
  console.log("name =", name, "| years =", years);
}
