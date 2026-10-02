export function commonMistakes(): void {
  const nums = [1, 2, 3];

  // 1. Braces without return: the callback returns undefined
  const none = nums.filter((n) => { n > 1; });  // none = []
  const fixed = nums.filter((n) => { return n > 1; });   // fixed = [2, 3]

  // 2. async callback: a Promise is always truthy
  const all = nums.filter(async (n) => n > 5);  // all = [1, 2, 3]

  console.log("none =", JSON.stringify(none), "| fixed =", JSON.stringify(fixed), "| all =", JSON.stringify(all));
}
