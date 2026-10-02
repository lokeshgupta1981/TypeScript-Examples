export function overloadSignatures(): void {
  // 1. Overload signatures
  function greet(name: string): string;
  function greet(names: string[]): string[];

  // 2. Implementation signature and body
  function greet(input: string | string[]): string | string[] {
    if (typeof input === "string") {
      return "Hello, " + input;
    }
    return input.map((name) => "Hello, " + name);
  }

  // 3. Calls
  const one = greet("Lokesh");                  // one = "Hello, Lokesh" (string)
  const many = greet(["Raj", "John"]);          // many = ["Hello, Raj", "Hello, John"] (string[])
  const loud = one.toUpperCase();               // loud = "HELLO, LOKESH"
  const count = many.length;                    // count = 2
  console.log(one, many, loud, count);
}
