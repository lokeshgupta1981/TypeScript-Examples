export async function quickReference(): Promise<void> {
  // 1. Callback type
  type OnLoaded = (name: string, age: number) => void;

  // 2. The function calls the callback with arguments
  function loadAge(name: string, done: OnLoaded): void {
    setTimeout(() => done(name, 37), 100);
  }

  // 3. Pass a callback
  loadAge("Lokesh", (name, age) => console.log(name + " is " + age)); // Lokesh is 37

  // 4. Pass our own values with a closure
  const greeting = "Hi";
  setTimeout(() => console.log(greeting + ", Raj"), 50); // Hi, Raj

  // 5. Same task with a Promise and async/await
  function loadAgeAsync(name: string): Promise<number> {
    return new Promise((resolve) => setTimeout(() => resolve(37), 100));
  }
  const age = await loadAgeAsync("Lokesh");     // age = 37
  console.log(age);
}
