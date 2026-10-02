class Person {
  name = "Raj";
  greet() { return "Hi " + this.name; }
}

export function shallowCopy(): void {
  const lokesh = { name: "Lokesh", address: { city: "Delhi" } };

  // 1. Spread copies only the top level
  const copy = { ...lokesh };
  copy.address.city = "Pune";
  const original = lokesh.address.city;         // original = "Pune", changed too

  // 2. Copy the nested object as well
  const copy2 = { ...lokesh, address: { ...lokesh.address } };
  copy2.address.city = "Mumbai";
  const kept = lokesh.address.city;             // kept = "Pune"

  // 3. Deep copy
  const deep = structuredClone(lokesh);
  deep.address.city = "Chennai";
  const still = lokesh.address.city;            // still = "Pune"

  console.log("original =", original, "kept =", kept, "still =", still);

  const plain = { ...new Person() };            // plain = { name: "Raj" }
  console.log("plain =", plain, "has greet:", "greet" in plain);
}
