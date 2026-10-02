export function stringKeys(): void {
  const ages: Record<string, number> = {
    Lokesh: 37,
    Raj: 35,
  };

  // 1. Read with brackets or a dot
  const a1 = ages["Lokesh"];                              // a1 = 37
  const a2 = ages.Raj;                                    // a2 = 35

  // 2. Add and update: assignment does both
  ages["John"] = 40;                                      // adds John
  ages["Raj"] = 36;                                       // replaces 35

  // 3. Delete a key
  delete ages["John"];                                    // ages = { Lokesh: 37, Raj: 36 }

  // 4. A missing key is undefined, but the type says number
  const missing = ages["Brian"];                          // type number, value undefined
  const safe = ages["Brian"] ?? 0;                        // safe = 0

  console.log("a1 =", a1, "a2 =", a2, "ages =", JSON.stringify(ages));
  console.log("missing =", missing, "safe =", safe);
}

export function otherKeyTypes(): void {
  // 1. Number keys; stored as strings at runtime
  const squares: Record<number, number> = { 1: 1, 2: 4, 3: 9 };
  const nine = squares[3];                                // nine = 9
  const keys = Object.keys(squares);                      // keys = ["1", "2", "3"]

  // 2. Array or object values
  const tags: Record<string, string[]> = { Lokesh: ["java", "ts"] };
  const first = tags["Lokesh"][0];                        // first = "java"

  console.log("nine =", nine, "keys =", JSON.stringify(keys), "first =", first);
}
