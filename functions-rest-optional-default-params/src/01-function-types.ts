export function functionTypes(): void {
  // 1. Function declaration
  function greet(name: string): string {
    return "Hi, " + name;
  }

  // 2. Function expression and arrow function
  const greetAgain = function (name: string): string {
    return "Hi again, " + name;
  };
  const shout = (name: string): string => name.toUpperCase();

  // 3. Function type alias
  type NameFormatter = (name: string) => string;
  const formatters: NameFormatter[] = [greet, greetAgain, shout];
  const results = formatters.map((f) => f("Raj")); // results = ["Hi, Raj", "Hi again, Raj", "RAJ"]
  console.log(results);
}
