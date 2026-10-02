interface Person {
  name: string;
  age: number;
}

export function equalityRules(): void {
  // 1. NaN equals NaN; 0 and -0 are the same value
  const special = new Set([NaN, NaN, 0, -0]);             // special = {NaN, 0}

  // 2. 1 and "1" are different values
  const mixed = new Set<number | string>([1, "1"]);       // mixed.size = 2

  // 3. Objects are compared by reference
  const people = new Set<Person>();
  people.add({ name: "Lokesh", age: 37 });
  people.add({ name: "Lokesh", age: 37 });                // people.size = 2

  const raj: Person = { name: "Raj", age: 35 };
  const team = new Set<Person>([raj, raj]);               // team.size = 1

  console.log("special =", special, "mixed.size =", mixed.size);
  console.log("people.size =", people.size, "team.size =", team.size);
}

export function uniqueByKey(): void {
  const list: Person[] = [
    { name: "Lokesh", age: 37 },
    { name: "Raj", age: 35 },
    { name: "Lokesh", age: 38 },
  ];

  // 1. Unique by name: a Map keyed by the name (last one wins)
  const byName = new Map(list.map((p) => [p.name, p]));
  const unique = [...byName.values()];                    // unique = [Lokesh 38, Raj 35]

  // 2. Only the first person with each name
  const seen = new Set<string>();
  const firsts = list.filter((p) => {
    if (seen.has(p.name)) return false;
    seen.add(p.name);
    return true;
  });                                                     // firsts = [Lokesh 37, Raj 35]

  console.log("unique =", JSON.stringify(unique));
  console.log("firsts =", JSON.stringify(firsts));
}
