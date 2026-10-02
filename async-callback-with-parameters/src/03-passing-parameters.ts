export function callerPassesArguments(): void {
  // The function that calls the callback decides the arguments
  function loadAge(name: string, done: (name: string, age: number) => void): void {
    setTimeout(() => done(name, 37), 100);
  }
  loadAge("Lokesh", (name, age) => console.log(name + " is " + age)); // Lokesh is 37
}

export function extraArguments(): void {
  function greet(greeting: string, name: string): void {
    console.log(greeting + ", " + name);
  }

  // 1. Closure: an arrow function that calls greet with our values
  setTimeout(() => greet("Hello", "Lokesh"), 50); // Hello, Lokesh

  // 2. bind(): a new function with the first arguments fixed
  const sayHi = greet.bind(null, "Hi");
  setTimeout(() => sayHi("Raj"), 100);          // Hi, Raj

  // 3. setTimeout passes extra arguments to the callback
  setTimeout(greet, 150, "Hey", "John");        // Hey, John
}

export function genericCallback(): void {
  function each<T>(items: T[], cb: (item: T, index: number) => void): void {
    items.forEach(cb);
  }
  each([37, 35], (age, i) => console.log(i, age.toFixed(1))); // 0 37.0, 1 35.0
  each(["apple"], (fruit) => console.log(fruit.toUpperCase())); // APPLE
}
