export function forOf(): void {
  // 1. Characters of a string
  const letters: string[] = [];
  for (const ch of "hi!") {
    letters.push(ch);
  }
  console.log("letters =", letters);            // letters = ["h", "i", "!"]

  // 2. Destructuring objects in the loop variable
  const people = [{ name: "Lokesh", age: 37 }, { name: "Raj", age: 35 }];
  for (const { name, age } of people) {
    console.log(name, age);                     // Lokesh 37, Raj 35
  }

  // 3. A let loop variable can be reassigned
  for (let word of ["apple", "kiwi"]) {
    word = word.toUpperCase();
    console.log(word);                          // APPLE, KIWI
  }
}
