export function truthyValues(): void {
  // 1. Non-empty strings, even "0", "false" and " "
  const s1 = Boolean("0");                      // s1 = true
  const s2 = Boolean("false");                  // s2 = true
  const s3 = Boolean(" ");                      // s3 = true

  // 2. Every number except 0, -0 and NaN
  const n1 = Boolean(-1);                       // n1 = true
  const n2 = Boolean(Infinity);                 // n2 = true

  // 3. Every object, even empty or "false" ones
  const o1 = Boolean([]);                       // o1 = true
  const o2 = Boolean({});                       // o2 = true
  const o3 = Boolean(new Boolean(false));       // o3 = true, an object
  const o4 = Boolean(() => false);              // o4 = true, a function

  console.log(s1, s2, s3, n1, n2, o1, o2, o3, o4);
}
