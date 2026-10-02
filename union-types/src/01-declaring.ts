export function declaringUnions(): void {
  // 1. Variable
  let age: number | string = 37;
  age = "37";

  // 2. Function parameter
  function show(value: number | string): string {
    return "Value: " + value;
  }
  const text = show(40);                        // text = "Value: 40"

  // 3. Type alias, optionally with a leading pipe
  type Id =
    | number
    | string;
  const id: Id = 7;

  // 4. Array of a union vs union of arrays
  const mixed: (number | string)[] = [1, "two", 3];
  const either: number[] | string[] = ["one", "two"];

  console.log("age =", age, "text =", text, "id =", id, mixed, either);
}
