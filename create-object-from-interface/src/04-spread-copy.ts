export function spreadCopy(): void {
  interface Address {
    city: string;
  }

  interface User {
    name: string;
    age: number;
    address: Address;
  }

  const lokesh: User = { name: "Lokesh", age: 37, address: { city: "Delhi" } };

  // 1. Copy and change one property
  const older: User = { ...lokesh, age: 38 };
  const oldAge = lokesh.age;                    // oldAge = 37, original unchanged

  // 2. Spread copies one level only: address is shared
  older.address.city = "Pune";
  const city = lokesh.address.city;             // city = "Pune"

  // 3. Deep copy with structuredClone()
  const clone: User = structuredClone(lokesh);
  clone.address.city = "Agra";
  const city2 = lokesh.address.city;            // city2 = "Pune"

  console.log("older.age =", older.age);
  console.log("oldAge =", oldAge);
  console.log("city =", city);
  console.log("city2 =", city2);
}
