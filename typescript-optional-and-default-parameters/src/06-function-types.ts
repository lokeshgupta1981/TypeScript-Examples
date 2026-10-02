export function functionTypes(): void {
  // 1. Optional parameter in a function type
  type Greeter = (name: string, greeting?: string) => string;

  // 2. A default value in the implementation satisfies it
  const greet: Greeter = (name, greeting = "Hello") => greeting + ", " + name;
  const g1 = greet("Lokesh");                   // g1 = "Hello, Lokesh"
  const g2 = greet("Lokesh", "Hi");             // g2 = "Hi, Lokesh"
  console.log(g1, g2);

  // 3. A callback may ignore parameters it does not need
  const ages = [37, 35, 40];
  const doubled = ages.map((age) => age * 2);   // doubled = [74, 70, 80]
  const indexed = ages.map((age, i) => i + ":" + age); // indexed = ["0:37", "1:35", "2:40"]
  console.log(doubled, indexed);
}
