export function nestedAndGeneric(): void {
  // 1. An interface as a property type
  interface Address {
    city: string;
  }

  interface User {
    name: string;
    age: number;
    address: Address;
  }

  const lokesh: User = { name: "Lokesh", age: 37, address: { city: "Delhi" } };
  const city = lokesh.address.city;             // city = "Delhi"

  // 2. A generic interface
  interface Box<T> {
    value: T;
  }

  const ageBox: Box<number> = { value: 37 };
  const userBox: Box<User> = { value: lokesh };
  const boxedName = userBox.value.name;         // boxedName = "Lokesh"

  console.log("city =", city);
  console.log("ageBox.value =", ageBox.value);
  console.log("boxedName =", boxedName);
}
