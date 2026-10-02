import { people, namesOf } from "./people.js";

export function byProperty(): void {
  // 1. Equal to a value
  const inPune = people.filter((p) => p.city === "Pune");   // Raj, Amit

  // 2. AND: both conditions
  const adultsInPune = people.filter((p) => p.city === "Pune" && p.age >= 18);   // Raj

  // 3. OR: either condition
  const youngOrOld = people.filter((p) => p.age < 18 || p.age >= 40);   // John, Amit

  // 4. Destructuring in the parameter
  const thirties = people.filter(({ age }) => age >= 30 && age < 40);   // Lokesh, Raj

  console.log("inPune =", namesOf(inPune), "| adultsInPune =", namesOf(adultsInPune));
  console.log("youngOrOld =", namesOf(youngOrOld), "| thirties =", namesOf(thirties));
}

export function filterByKey(): void {
  function filterBy<T, K extends keyof T>(items: T[], key: K, value: T[K]): T[] {
    return items.filter((item) => item[key] === value);
  }

  const fromDelhi = filterBy(people, "city", "Delhi");   // Lokesh, John
  const aged35 = filterBy(people, "age", 35);   // Raj

  console.log("fromDelhi =", namesOf(fromDelhi), "| aged35 =", namesOf(aged35));
}
