export function assertion(): void {
  interface User {
    name: string;
    age: number;
  }

  // 1. Type assertion: compiles, but the object is empty
  const broken = {} as User;
  const name = broken.name;                     // name = undefined, typed as string

  // 2. Partial<User> while the object is being filled
  const draft: Partial<User> = {};
  draft.name = "John";
  draft.age = 40;

  // 3. Check before treating it as a User
  if (draft.name !== undefined && draft.age !== undefined) {
    const john: User = { name: draft.name, age: draft.age };
    console.log(john);                          // { name: "John", age: 40 }
  }

  console.log("name =", name);
}
