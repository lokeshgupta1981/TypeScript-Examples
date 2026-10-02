export function optionalChaining(): void {
  type User = {
    name: string;
    address?: { city: string };
    tags?: string[];
    greet?: () => string;
  };
  const john: User = { name: "John" };
  const raj: User = { name: "Raj", address: { city: "Pune" }, tags: ["admin"] };

  // 1. Property
  const c1 = john.address?.city;                // c1 = undefined
  const c2 = raj.address?.city;                 // c2 = "Pune"

  // 2. Array element and method call
  const tag = john.tags?.[0];                   // tag = undefined
  const hello = john.greet?.();                 // hello = undefined

  // 3. With a default value
  const city = john.address?.city ?? "Unknown"; // city = "Unknown"

  console.log("c1 =", c1, "c2 =", c2, "tag =", tag, "hello =", hello, "city =", city);
}
