export function functionTypes(): void {
  // 1. A type with two call signatures
  type Greet = {
    (name: string): string;
    (names: string[]): string[];
  };

  // 2. An overloaded function declaration matches it
  function greetImpl(name: string): string;
  function greetImpl(names: string[]): string[];
  function greetImpl(input: string | string[]): string | string[] {
    return typeof input === "string" ? "Hi, " + input : input.map((n) => "Hi, " + n);
  }
  const greet: Greet = greetImpl;

  const one = greet("Raj");                     // one = "Hi, Raj" (string)
  const many = greet(["Raj", "John"]);          // many = ["Hi, Raj", "Hi, John"] (string[])
  console.log(one, many);

  // 3. Overloaded methods in an interface
  interface Formatter {
    format(value: number): string;
    format(value: Date): string;
  }
  const formatter: Formatter = {
    format(value: number | Date): string {
      return typeof value === "number" ? value.toFixed(1) : value.toISOString().slice(0, 10);
    },
  };
  const f1 = formatter.format(37);              // f1 = "37.0"
  const f2 = formatter.format(new Date(0));     // f2 = "1970-01-01"
  console.log(f1, f2);
}
