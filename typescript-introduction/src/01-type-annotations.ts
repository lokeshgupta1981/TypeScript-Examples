export function typeAnnotations(): void {
  // 1. Annotated variables
  const name: string = "Lokesh";
  const age: number = 37;

  // 2. Inferred type: number
  const nextAge = age + 1;                      // nextAge = 38

  // 3. Typed function
  function greet(person: string): string {
    return "Hello, " + person;
  }
  const text = greet(name);                     // text = "Hello, Lokesh"

  console.log("nextAge =", nextAge);
  console.log("text =", text);
}
