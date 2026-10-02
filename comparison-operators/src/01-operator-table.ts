export function operatorTable(): void {
  const a: number = 10;
  const b: number = 20;

  console.log("a == b", a == b);                // false
  console.log("a != b", a != b);                // true
  console.log("a === 10", a === 10);            // true
  console.log("a !== b", a !== b);              // true
  console.log("a > b", a > b);                  // false
  console.log("a < b", a < b);                  // true
  console.log("a >= 10", a >= 10);              // true
  console.log("a <= 5", a <= 5);                // false
}
