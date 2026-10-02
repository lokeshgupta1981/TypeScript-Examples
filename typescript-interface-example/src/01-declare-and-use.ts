export function declareAndUse(): void {
  interface User {
    name: string;
    age: number;
  }

  // 1. Type of a variable
  const lokesh: User = { name: "Lokesh", age: 37 };

  // 2. Type of a parameter and a return value
  function describe(user: User): string {
    return user.name + " is " + user.age;
  }

  const text = describe(lokesh);                // text = "Lokesh is 37"

  // 3. Type of an array
  const users: User[] = [lokesh, { name: "Raj", age: 35 }];
  const names = users.map((u) => u.name);       // names = ["Lokesh", "Raj"]

  console.log("text =", text);
  console.log("names =", names);
}
