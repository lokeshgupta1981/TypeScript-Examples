export function constraints(): void {
  // 1. T must have a length property
  function longest<T extends { length: number }>(a: T, b: T): T {
    return a.length >= b.length ? a : b;
  }
  const word = longest("apple", "kiwi");        // word = "apple"
  const list = longest([1, 2], [1, 2, 3]);      // list = [1, 2, 3]
  console.log(word, list);

  // 2. T must have an age; the result keeps every other field
  interface HasAge {
    age: number;
  }
  function oldest<T extends HasAge>(people: T[]): T {
    return people.reduce((a, b) => (b.age > a.age ? b : a));
  }
  const people = [{ name: "Lokesh", age: 37 }, { name: "John", age: 40 }];
  const topName = oldest(people).name;          // topName = "John"
  console.log(topName);
}

export function keyofConstraint(): void {
  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  const person = { name: "Lokesh", age: 37 };
  const personName = getProperty(person, "name"); // personName = "Lokesh" (string)
  const personAge = getProperty(person, "age");   // personAge = 37 (number)
  console.log(personName, personAge);
}
