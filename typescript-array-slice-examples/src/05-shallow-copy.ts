export function shallowCopy(): void {
  const people = [
    { name: "Lokesh", age: 37 },
    { name: "Raj", age: 35 },
  ];

  const firstPerson = people.slice(0, 1);
  firstPerson[0].age = 38;                      // people[0].age = 38 too
  console.log("people[0].age =", people[0].age);

  const firstClone = structuredClone(people.slice(0, 1));
  firstClone[0].age = 40;                       // people[0].age stays 38
  console.log("people[0].age =", people[0].age, "| firstClone[0].age =", firstClone[0].age);
}
