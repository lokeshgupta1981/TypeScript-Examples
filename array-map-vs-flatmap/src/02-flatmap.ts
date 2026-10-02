export function flatMapExamples(): void {
  const sentences = ["hello world", "good morning"];

  // 1. map() gives an array of arrays: string[][]
  const nested = sentences.map((s) => s.split(" "));        // nested = [["hello", "world"], ["good", "morning"]]

  // 2. flatMap() gives one flat array: string[]
  const words = sentences.flatMap((s) => s.split(" "));     // words = ["hello", "world", "good", "morning"]

  console.log("nested =", JSON.stringify(nested));
  console.log("words =", JSON.stringify(words));
}

export function flatMapObjects(): void {
  const people = [
    { name: "Lokesh", hobbies: ["chess", "cricket"] },
    { name: "Raj", hobbies: ["music"] },
    { name: "John", hobbies: [] },
  ];

  // 1. Collect all hobbies in one array
  const hobbies = people.flatMap((p) => p.hobbies);         // hobbies = ["chess", "cricket", "music"]

  // 2. Mix single values and arrays
  const nums = [1, 2, 3].flatMap((n) => (n === 2 ? [n, n] : n));   // nums = [1, 2, 2, 3]

  console.log("hobbies =", JSON.stringify(hobbies));
  console.log("nums =", JSON.stringify(nums));
}
