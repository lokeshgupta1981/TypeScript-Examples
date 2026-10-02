export function forIn(): void {
  const ages = { Lokesh: 37, Raj: 35 };

  // 1. Read values: tell TypeScript the key type
  for (const name in ages) {
    const age = ages[name as keyof typeof ages];
    console.log(name, age);                     // Lokesh 37, Raj 35
  }

  // 2. Array indexes are strings
  const scores = [10, 20];
  for (const index in scores) {
    console.log(index, typeof index);           // 0 string, 1 string
  }
}
