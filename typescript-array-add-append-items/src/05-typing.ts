export function typedAdds(): void {
  // 1. Empty array in an object literal: give the property a type
  const cart: { items: string[] } = { items: [] };
  cart.items.push("apple");                     // items = ["apple"]

  // 2. Array of objects: every pushed object is checked
  interface Person { name: string; age: number; }
  const people: Person[] = [];
  people.push({ name: "Lokesh", age: 37 });     // people.length = 1

  // 3. Union element type
  const values: (string | number)[] = [];
  values.push("apple", 5);                      // values = ["apple", 5]

  console.log("items =", cart.items, "| people.length =", people.length, "| values =", values);
}
