export function optionalAndDefault(): void {
  function label(name: string, age?: number, city = "Delhi"): string {
    return name + " " + (age ?? "?") + " " + city;
  }

  const l1 = label("Raj");                      // l1 = "Raj ? Delhi"
  const l2 = label("Lokesh", 37);               // l2 = "Lokesh 37 Delhi"
  const l3 = label("John", 40, "Pune");         // l3 = "John 40 Pune"
  console.log(l1, l2, l3);
}
