export function narrowWithIn(): void {
  type Person = { name: string; age: number };
  type Company = { name: string; employees: number };

  function describe(owner: Person | Company): string {
    if ("age" in owner) {
      return owner.name + " is " + owner.age;   // owner: Person
    }
    return owner.name + " has " + owner.employees + " employees";
  }

  const d1 = describe({ name: "Lokesh", age: 37 });       // d1 = "Lokesh is 37"
  const d2 = describe({ name: "Acme", employees: 40 });   // d2 = "Acme has 40 employees"

  console.log("d1 =", d1);
  console.log("d2 =", d2);
}
