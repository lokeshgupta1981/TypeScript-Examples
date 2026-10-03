import { show } from "./show.js";

export function numberIsNaN(): void {
  const price = Number("abc");                      // price = NaN

  // 1. NaN is not equal to itself
  const selfEqual = price === price;                // selfEqual = false

  // 2. Number.isNaN() is true only for the NaN value
  const nan = Number.isNaN(price);                  // nan = true
  const text = Number.isNaN("abc");                 // text = false, a string is not NaN
  const missing = Number.isNaN(undefined);          // missing = false

  show({ price, selfEqual, nan, text, missing });
}
