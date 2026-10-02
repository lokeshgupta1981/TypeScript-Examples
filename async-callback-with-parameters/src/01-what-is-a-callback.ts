export function syncCallback(): void {
  // 1. Synchronous callback: runs before map() returns
  const ages = [37, 35, 40];
  const next = ages.map((age) => age + 1);      // next = [38, 36, 41]
  console.log(next);
}

export function asyncCallback(): void {
  // 2. Asynchronous callback: runs after the current code finishes
  console.log("1. before");
  setTimeout(() => console.log("3. callback"), 100);
  console.log("2. after");
}
