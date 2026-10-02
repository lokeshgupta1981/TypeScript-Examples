export function constValues(): void {
  // 1. Object and array contents can change
  const ages = { Lokesh: 37, Raj: 35 };
  ages.Raj = 36;                                // allowed
  const fruits = ["apple"];
  fruits.push("banana");                        // fruits = ["apple", "banana"]

  // 2. Object.freeze(): read-only at runtime and in the type
  const frozen = Object.freeze({ Lokesh: 37 });
  // frozen.Lokesh = 38;                        // error TS2540

  // 3. as const: read-only tuple of literal types
  const sizes = ["small", "large"] as const;    // type readonly ["small", "large"]
  // sizes.push("medium");                      // error TS2339

  console.log("ages =", ages, "| fruits =", fruits);
  console.log("frozen =", frozen, "| isFrozen =", Object.isFrozen(frozen), "| sizes =", sizes);
}
