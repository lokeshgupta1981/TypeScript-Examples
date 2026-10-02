export function quickReference(): void {
  // 1. Generic function; T is inferred from the argument
  function first<T>(items: T[]): T | undefined {
    return items[0];
  }
  const name = first(["Lokesh", "Raj"]);        // name = "Lokesh"
  const age = first([37, 35]);                  // age = 37
  console.log(name, age);

  // 2. Constraint with extends
  function longest<T extends { length: number }>(a: T, b: T): T {
    return a.length >= b.length ? a : b;
  }
  const word = longest("apple", "kiwi");        // word = "apple"
  console.log(word);

  // 3. Constraint with keyof
  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  const person = { name: "Lokesh", age: 37 };
  const personAge = getProperty(person, "age"); // personAge = 37 (number)
  console.log(personAge);

  // 4. const type parameter keeps literal types
  function options<const T extends readonly string[]>(items: T): T {
    return items;
  }
  const fruits = options(["apple", "banana"]);  // type readonly ["apple", "banana"]
  console.log(fruits);

  // 5. Generic interface with a default type
  interface Box<T = string> {
    value: T;
  }
  const label: Box = { value: "apple" };        // T = string
  const count: Box<number> = { value: 5 };      // T = number
  console.log(label.value, count.value);

  // 6. Generic class
  class Stack<T> {
    private items: T[] = [];
    push(item: T): void {
      this.items.push(item);
    }
    pop(): T | undefined {
      return this.items.pop();
    }
  }
  const stack = new Stack<string>();
  stack.push("apple");
  const top = stack.pop();                      // top = "apple"
  console.log(top);
}
