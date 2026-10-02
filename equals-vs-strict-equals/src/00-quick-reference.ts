export function quickReference(): void {
  const input: unknown = JSON.parse('"10"');    // the string "10"

  // 1. == converts the string, === does not
  const loose = input == 10;                    // loose = true
  const strict = input === 10;                  // strict = false

  // 2. == null matches null and undefined
  const ages = new Map<string, number>([["Lokesh", 37]]);
  const raj = ages.get("Raj");                  // raj = undefined
  const isMissing = raj == null;                // isMissing = true
  const isNull = raj === null;                  // isNull = false

  // 3. NaN equals nothing, Object.is() finds it
  const nan = Number("abc");                    // nan = NaN
  const strictNan = nan === nan;                // strictNan = false
  const sameNan = Object.is(nan, NaN);          // sameNan = true

  // 4. Objects compare by reference with both
  const lokesh = { age: 37 };
  const copy = { age: 37 };
  const equal = lokesh == copy;                 // equal = false

  console.log("loose =", loose, "strict =", strict);
  console.log("raj =", raj, "isMissing =", isMissing, "isNull =", isNull);
  console.log("nan =", nan, "strictNan =", strictNan, "sameNan =", sameNan, "equal =", equal);
}
