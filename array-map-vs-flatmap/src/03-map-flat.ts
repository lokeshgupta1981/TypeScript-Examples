export function mapFlatExamples(): void {
  const nums = [1, 2, 3];

  // 1. Two calls and one call give the same result
  const a = nums.map((n) => [n, n * 10]).flat();            // a = [1, 10, 2, 20, 3, 30]
  const b = nums.flatMap((n) => [n, n * 10]);               // b = [1, 10, 2, 20, 3, 30]

  // 2. flatMap() removes only one level of nesting
  const c = nums.flatMap((n) => [[n]]);                     // c = [[1], [2], [3]]

  // 3. flat() takes a depth
  const deep = [1, [2, [3, [4]]]];
  const one = deep.flat();                                  // one = [1, 2, [3, [4]]]
  const two = deep.flat(2);                                 // two = [1, 2, 3, [4]]
  const all = deep.flat(Infinity);                          // all = [1, 2, 3, 4]

  console.log("a =", JSON.stringify(a));
  console.log("b =", JSON.stringify(b));
  console.log("c =", JSON.stringify(c));
  console.log("one =", JSON.stringify(one));
  console.log("two =", JSON.stringify(two));
  console.log("all =", JSON.stringify(all));
}
