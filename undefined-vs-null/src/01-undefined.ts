export function whereUndefinedComesFrom(): void {
  // 1. Variable declared without a value
  let age: number | undefined;                  // age = undefined

  // 2. Missing property
  const ages: Record<string, number> = { Lokesh: 37 };
  const raj = ages["Raj"];                      // raj = undefined

  // 3. Missing argument
  function greet(name?: string): string {
    return "Hello, " + name;
  }
  const g = greet();                            // g = "Hello, undefined"

  // 4. Function without a return value
  function log(): void {}
  const result = log();                         // result = undefined

  // 5. Index out of range, no match, missing key
  const second = [37][1];                       // second = undefined
  const found = [37, 35].find((n) => n > 40);   // found = undefined
  const fromMap = new Map<string, number>().get("John");   // fromMap = undefined

  console.log(age, raj, "g =", g, result, second, found, fromMap);
}
