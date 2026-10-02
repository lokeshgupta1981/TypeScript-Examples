import { describe, type Fruit } from "./types.js";

export function verbatimImports(): void {
  const apple: Fruit = { name: "apple", price: 5 };
  const text = describe(apple);                 // text = "apple costs 5"

  console.log("text =", text);
}
