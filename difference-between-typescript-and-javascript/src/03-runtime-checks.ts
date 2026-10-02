export function runtimeChecks(): void {
  interface Person { name: string; age: number }

  const data: unknown = JSON.parse('{"name":"John","age":"40"}');

  // Check the value before using it as a Person
  function isPerson(value: unknown): value is Person {
    return typeof value === "object" && value !== null
      && typeof (value as Person).name === "string"
      && typeof (value as Person).age === "number";
  }

  const valid = isPerson(data);                 // valid = false, age is a string

  console.log("valid =", valid);
}
