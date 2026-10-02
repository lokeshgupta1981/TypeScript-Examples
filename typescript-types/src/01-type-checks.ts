export function typeChecks(): void {
  let age: number = 37;
  age = 38;                                     // OK

  console.log("age =", age);
}
