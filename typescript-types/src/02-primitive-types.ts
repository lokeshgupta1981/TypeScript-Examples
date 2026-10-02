export function primitiveTypes(): void {
  // 1. Text and numbers
  const name: string = "Lokesh";
  const age: number = 37;                       // integer
  const price: number = 4.5;                    // decimal, same type
  const big: bigint = 9007199254740993n;        // above Number.MAX_SAFE_INTEGER

  // 2. Booleans
  const isActive: boolean = true;

  // 3. Unique property keys
  const key: symbol = Symbol("key");

  // 4. Empty values
  const nothing: null = null;
  const notSet: undefined = undefined;

  // 5. typeof at runtime
  const t1 = typeof age;                        // t1 = "number"
  const t2 = typeof big;                        // t2 = "bigint"
  const t3 = typeof nothing;                    // t3 = "object", a JavaScript quirk

  console.log(name, age, price, big, isActive, key.toString(), nothing, notSet);
  console.log("t1 =", t1, "t2 =", t2, "t3 =", t3);
}
