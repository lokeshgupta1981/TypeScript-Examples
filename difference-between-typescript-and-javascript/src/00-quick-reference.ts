export function quickReference(): void {
  // 1. Type annotation (TypeScript only; removed from the JavaScript output)
  let age: number = 37;

  // 2. Assigning another type
  // age = "thirty";                            // TypeScript: error TS2322, JavaScript: allowed

  // 3. Type inference
  let city = "Delhi";                           // type string, no annotation needed

  // 4. Interface (TypeScript only; emits no JavaScript)
  interface Person { name: string; age: number }
  const raj: Person = { name: "Raj", age: 35 };

  // 5. Misspelled property
  // raj.nmae;                                  // TypeScript: error TS2339, JavaScript: undefined

  // 6. Same runtime: types do not change values
  const joined = 5 + "10";                      // joined = "510" in both languages

  // 7. No runtime type checks
  const data: Person = JSON.parse('{"name":"John","age":"40"}');
  const next = data.age + 1;                    // next = "401", not 41

  console.log("age =", age, "| city =", city, typeof city, "| raj =", raj.name);
  console.log("joined =", JSON.stringify(joined));
  console.log("next =", JSON.stringify(next));
}
