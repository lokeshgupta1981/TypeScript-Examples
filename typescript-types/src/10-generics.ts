export function generics(): void {
  // 1. Generic function
  function first<T>(items: T[]): T | undefined {
    return items[0];
  }
  const age = first([37, 35]);                  // age = 37, type number | undefined
  const fruit = first(["apple", "banana"]);     // fruit = "apple"

  // 2. Generic type alias
  type Box<T> = { value: T };
  const box: Box<number> = { value: 5 };

  console.log("age =", age, "fruit =", fruit, box);
}
