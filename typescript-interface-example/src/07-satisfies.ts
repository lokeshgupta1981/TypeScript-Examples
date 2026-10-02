export function satisfiesCheck(): void {
  interface User {
    name: string;
    age: number | string;
  }

  // 1. Type annotation: the variable has type User
  const raj: User = { name: "Raj", age: 35 };
  // raj.age is number | string

  // 2. satisfies: checked against User, keeps the literal's own type
  const john = { name: "John", age: 40 } satisfies User;
  const nextAge = john.age + 1;                 // nextAge = 41, age is number

  console.log("raj.age =", raj.age);
  console.log("nextAge =", nextAge);
}
