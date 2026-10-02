export function quickReference(): void {
  // 1. Optional parameter with ?
  function fullName(first: string, last: string, middle?: string): string {
    return middle ? first + " " + middle + " " + last : first + " " + last;
  }
  const n1 = fullName("Lokesh", "Gupta");       // n1 = "Lokesh Gupta"
  const n2 = fullName("Raj", "Kumar", "Pal");   // n2 = "Raj Pal Kumar"
  console.log(n1, n2);

  // 2. Default value
  function greet(name: string, greeting = "Hello"): string {
    return greeting + ", " + name;
  }
  const g1 = greet("John");                     // g1 = "Hello, John"
  const g2 = greet("John", "Hi");               // g2 = "Hi, John"
  const g3 = greet("John", undefined);          // g3 = "Hello, John" (undefined uses the default)
  console.log(g1, g2, g3);

  // 3. Options object with defaults
  interface PrintOptions {
    prefix?: string;
    upper?: boolean;
  }
  function print(name: string, { prefix = "-", upper = false }: PrintOptions = {}): string {
    const text = prefix + " " + name;
    return upper ? text.toUpperCase() : text;
  }
  const p1 = print("apple");                    // p1 = "- apple"
  const p2 = print("apple", { upper: true });   // p2 = "- APPLE"
  console.log(p1, p2);
}
