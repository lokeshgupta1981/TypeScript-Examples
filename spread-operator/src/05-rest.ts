export function rest(): void {
  // 1. Rest parameter: any number of arguments
  const sum = (...nums: number[]) => nums.reduce((a, b) => a + b, 0);
  const s0 = sum();                             // s0 = 0
  const s3 = sum(1, 2, 3);                      // s3 = 6

  // 2. Rest in array destructuring
  const [first, ...others] = ["apple", "banana", "cherry"];
  // first = "apple", others = ["banana", "cherry"]

  // 3. Rest in object destructuring
  const { name, ...details } = { name: "Lokesh", age: 37, city: "Delhi" };
  // name = "Lokesh", details = { age: 37, city: "Delhi" }

  console.log("s0 =", s0, "s3 =", s3, "first =", first, "others =", others);
  console.log("name =", name, "details =", details);
}
