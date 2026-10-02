export function quickReference(): void {
  // 1. undefined: never set; null: set to "no value" on purpose
  let notSet: string | undefined;               // notSet = undefined
  const empty: string | null = null;            // empty = null

  // 2. typeof
  const t1 = typeof notSet;                     // t1 = "undefined"
  const t2 = typeof empty;                      // t2 = "object"

  // 3. Equality
  const loose = null == undefined;              // loose = true
  const strict = null === undefined;            // strict = false

  // 4. ?? replaces only null and undefined, || replaces any falsy value
  const count = 0;
  const a = count ?? 10;                        // a = 0
  const b = count || 10;                        // b = 10

  // 5. Optional chaining stops at null or undefined
  const user: { address?: { city: string } } = {};
  const city = user.address?.city;              // city = undefined

  // 6. One check for both values
  const isMissing = empty == null;              // isMissing = true

  console.log("notSet =", notSet, "empty =", empty, "t1 =", t1, "t2 =", t2);
  console.log("loose =", loose, "strict =", strict, "a =", a, "b =", b);
  console.log("city =", city, "isMissing =", isMissing);
}
