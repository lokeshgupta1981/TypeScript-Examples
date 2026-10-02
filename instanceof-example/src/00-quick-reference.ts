export function quickReference(): void {
  class Shape {}
  class Square extends Shape {
    side = 4;
  }

  const square = new Square();

  // 1. A class and its parent classes
  const r1 = square instanceof Square;          // r1 = true
  const r2 = square instanceof Shape;           // r2 = true
  const r3 = square instanceof Object;          // r3 = true

  // 2. Built-in classes
  const r4 = new Date() instanceof Date;        // r4 = true
  const r5 = [1, 2, 3] instanceof Array;        // r5 = true

  // 3. Narrowing: inside the if block, value is a Date
  const value: Date | string = new Date(2026, 0, 15);
  if (value instanceof Date) {
    console.log(value.getFullYear());           // 2026
  }

  // 4. Interfaces: check a property with "in" instead
  interface User { name: string; age: number; }
  const lokesh: User | Square = { name: "Lokesh", age: 37 };
  const isUser = "age" in lokesh;               // isUser = true

  console.log("r1 =", r1, "r2 =", r2, "r3 =", r3);
  console.log("r4 =", r4, "r5 =", r5);
  console.log("isUser =", isUser);
}
