export function fromJson(): void {
  interface User {
    name: string;
    age: number;
  }

  const json = '{"name":"Lokesh","age":37}';

  // 1. JSON.parse() returns any; the annotation is not checked at runtime
  const lokesh: User = JSON.parse(json);
  const age = lokesh.age;                       // age = 37

  // 2. A runtime check before using the data
  function isUser(value: unknown): value is User {
    return typeof value === "object" && value !== null
      && typeof (value as User).name === "string"
      && typeof (value as User).age === "number";
  }

  const data: unknown = JSON.parse('{"name":"Raj"}');
  const valid = isUser(data);                   // valid = false, age is missing

  console.log("age =", age);
  console.log("valid =", valid);
}
