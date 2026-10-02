type Named<T extends unknown[]> = [string, ...T];

export function tuples(): void {
  const pair: [string, number] = ["Lokesh", 37];

  // 1. Without a type, the result is an array
  const loose = [...pair, true];                // type (string | number | boolean)[]

  // 2. as const or a tuple type keeps the positions
  const fixed = [...pair, true] as const;       // type readonly [string, number, true]
  const typed: [string, number, boolean] = [...pair, true];

  // 3. Spread inside a tuple type
  const row: Named<[number, boolean]> = ["Lokesh", 37, true];

  console.log("loose =", loose, "fixed =", fixed, "typed =", typed, "row =", row);
}
