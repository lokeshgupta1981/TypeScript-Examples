interface User {
  name: string;
  address?: { city: string };
  tags?: string[];
  greet?: () => string;
}

export function optionalChaining(): void {
  const lokesh: User = { name: "Lokesh" };
  const raj: User = { name: "Raj", address: { city: "Pune" }, tags: ["admin"] };

  const city1 = lokesh.address?.city;           // city1 = undefined
  const city2 = raj.address?.city;              // city2 = "Pune"
  const label = lokesh.address?.city ?? "Unknown";   // label = "Unknown"
  const firstTag = raj.tags?.[0];               // firstTag = "admin"
  const greeting = lokesh.greet?.();            // greeting = undefined

  console.log("city1 =", city1, "city2 =", city2, "label =", label);
  console.log("firstTag =", firstTag, "greeting =", greeting);
}
