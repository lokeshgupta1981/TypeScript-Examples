export function convertToBoolean(): void {
  const fruit = "apple";
  const empty = "";
  const age: number | null = 37;

  // 1. Boolean() function
  const b1 = Boolean(fruit);                    // b1 = true
  const b2 = Boolean(empty);                    // b2 = false

  // 2. Double NOT operator
  const b3 = !!age;                             // b3 = true
  const b4 = !!empty;                           // b4 = false

  // 3. Typed result for a function
  function hasName(name: string | undefined): boolean {
    return Boolean(name);
  }
  const h = hasName("");                        // h = false

  console.log("b1 =", b1, "b2 =", b2, "b3 =", b3, "b4 =", b4, "h =", h);
}
