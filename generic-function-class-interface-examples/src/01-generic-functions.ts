export function genericFunctions(): void {
  // 1. Declare a type parameter T
  function first<T>(items: T[]): T | undefined {
    return items[0];
  }

  // 2. Let TypeScript infer T
  const name = first(["Lokesh", "Raj"]);        // name = "Lokesh" (string | undefined)
  const age = first([37, 35, 40]);              // age = 37 (number | undefined)
  console.log(name, age);

  // 3. Pass the type argument explicitly
  const nobody = first<string>([]);             // nobody = undefined
  console.log(nobody);

  // 4. Generic arrow function
  const last = <T>(items: T[]): T | undefined => items.at(-1);
  const fruit = last(["apple", "banana"]);      // fruit = "banana"
  console.log(fruit);

  // 5. Two type parameters
  function pair<K, V>(key: K, value: V): [K, V] {
    return [key, value];
  }
  const entry = pair("Lokesh", 37);             // entry = ["Lokesh", 37] ([string, number])
  console.log(entry);
}

export function anyLosesTypes(): void {
  function firstAny(items: any[]): any {
    return items[0];
  }

  const value = firstAny(["Lokesh"]);           // type any
  try {
    value.toFixed(2);                           // compiles, TypeError at runtime
  } catch (e) {
    console.log(String(e));
  }
}
