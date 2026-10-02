export function defaultValues(): void {
  // 1. Type is inferred from the default value
  function greet(name: string, greeting = "Hello"): string {
    return greeting + ", " + name;
  }
  const g1 = greet("John");                     // g1 = "Hello, John"
  const g2 = greet("John", "Hi");               // g2 = "Hi, John"
  console.log(g1, g2);

  // 2. A default can use earlier parameters
  function box(width: number, height = width): number {
    return width * height;
  }
  const square = box(5);                        // square = 25
  const rect = box(5, 3);                       // rect = 15
  console.log(square, rect);

  // 3. The default is evaluated on every call
  function addFruit(fruit: string, basket: string[] = []): string[] {
    basket.push(fruit);
    return basket;
  }
  const b1 = addFruit("apple");                 // b1 = ["apple"]
  const b2 = addFruit("banana");                // b2 = ["banana"], a new array
  console.log(b1, b2);
}
