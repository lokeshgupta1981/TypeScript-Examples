export function interfaceVsType(): void {
  // 1. Both describe an object shape
  interface UserI {
    name: string;
    age: number;
  }

  type UserT = {
    name: string;
    age: number;
  };

  const a: UserI = { name: "Lokesh", age: 37 };
  const b: UserT = a;                           // same shape, so assignable

  // 2. Only a type alias can name a union, a tuple or a primitive
  type Id = number | string;
  type Pair = [string, number];

  const id: Id = "u1";
  const pair: Pair = ["Raj", 35];

  // 3. Only an interface merges with a second declaration
  interface Settings {
    theme: string;
  }
  interface Settings {
    fontSize: number;
  }

  const settings: Settings = { theme: "dark", fontSize: 14 };   // needs both

  console.log("b =", b);
  console.log("id =", id, "pair =", pair);
  console.log("settings =", settings);
}
