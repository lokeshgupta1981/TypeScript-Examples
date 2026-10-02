export function arraysAndTuples(): void {
  // 1. Two ways to write an array type
  const ages: number[] = [37, 35, 40];
  const names: Array<string> = ["Lokesh", "Raj"];

  // 2. Read-only array
  const fruits: readonly string[] = ["apple", "banana"];

  // 3. Tuple: fixed length, one type per position
  const person: [string, number] = ["Lokesh", 37];
  const [who, age] = person;                    // who = "Lokesh", age = 37

  // 4. Named and optional tuple elements
  type Point = [x: number, y: number, z?: number];
  const p: Point = [1, 2];
  const size = p.length;                        // size = 2

  console.log(ages, names, fruits);
  console.log("who =", who, "age =", age, "size =", size);
}
