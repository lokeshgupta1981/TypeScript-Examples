export function callbackTypes(): void {
  // 1. Inline type
  function forEachFruit(fruits: string[], cb: (fruit: string, index: number) => void): void {
    for (let i = 0; i < fruits.length; i++) {
      cb(fruits[i], i);
    }
  }
  forEachFruit(["apple", "banana"], (fruit, i) => console.log(i + ": " + fruit)); // 0: apple, 1: banana

  // 2. Type alias
  type AgeCallback = (name: string, age: number) => void;
  const printAge: AgeCallback = (name, age) => console.log(name + " " + age);
  printAge("Raj", 35);                          // Raj 35

  // 3. Interface with a call signature
  interface AgeFilter {
    (age: number): boolean;
  }
  const isAdult: AgeFilter = (age) => age >= 18;
  const adults = [37, 12, 40].filter(isAdult);  // adults = [37, 40]
  console.log(adults);
}
