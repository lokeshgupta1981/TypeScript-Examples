export function creatingArrays(): void {
  // 1. Two ways to write the type
  const fruits: string[] = ["apple", "banana"];
  const prices: Array<number> = [5, 3];

  // 2. Type inferred from the values
  const ages = [37, 35, 40];                    // number[]

  // 3. Empty array: write the type
  const names: string[] = [];
  names.push("Lokesh");                         // names = ["Lokesh"]

  console.log("fruits =", fruits, "| prices =", prices, "| ages =", ages, "| names =", names);
}

export function fixedLengthArrays(): void {
  const slots = new Array<number>(3);           // [ <3 empty items> ]
  const zeros = new Array<number>(3).fill(0);   // zeros = [0, 0, 0]
  const evens = Array.from({ length: 3 }, (_, i) => i * 2);   // evens = [0, 2, 4]

  console.log("slots =", slots, "| zeros =", zeros, "| evens =", evens);
}

export function unionObjectNestedArrays(): void {
  // 1. Mixed values: parentheses around the union
  const values: (string | number)[] = ["apple", 5];

  // 2. Objects
  interface Person { name: string; age: number; }
  const people: Person[] = [
    { name: "Lokesh", age: 37 },
    { name: "Raj", age: 35 },
  ];
  const raj = people[1].name;                   // raj = "Raj"

  // 3. Nested arrays (a grid)
  const grid: number[][] = [
    [1, 2],
    [3, 4],
  ];
  const cell = grid[1][0];                      // cell = 3

  console.log("values =", values, "| raj =", raj, "| cell =", cell);
}
