export function copyAndMerge(): void {
  const fruits = ["apple", "banana"];
  const more = ["cherry"];

  // 1. Shallow copy
  const copy = [...fruits];                     // copy = ["apple", "banana"]
  copy.push("mango");                           // fruits stays ["apple", "banana"]

  // 2. Merge
  const merged = [...fruits, ...more];          // merged = ["apple", "banana", "cherry"]
  const joined = fruits.concat(more);           // joined = ["apple", "banana", "cherry"]

  console.log("copy =", copy, "| fruits =", fruits);
  console.log("merged =", merged, "| joined =", joined);
}

export function deepCopy(): void {
  const people = [{ name: "Lokesh", age: 37 }];

  const shallow = [...people];
  shallow[0].age = 38;                          // people[0].age = 38 too

  const deep = structuredClone(people);
  deep[0].age = 40;                             // people[0].age stays 38

  console.log("people[0].age =", people[0].age, "| deep[0].age =", deep[0].age);
}
