export function optionalAndReadonly(): void {
  interface User {
    readonly id: number;
    name: string;
    age: number;
    email?: string;
  }

  const john: User = { id: 3, name: "John", age: 40 };

  // 1. An optional property may be missing
  const email = john.email;                     // email = undefined
  const shown = john.email ?? "no email";       // shown = "no email"

  // 2. A readonly property can be read, not reassigned
  const id = john.id;                           // id = 3

  // 3. Other properties can change
  john.age = 41;                                // age = 41

  console.log("email =", email);
  console.log("shown =", shown);
  console.log("id =", id);
  console.log("age =", john.age);
}
