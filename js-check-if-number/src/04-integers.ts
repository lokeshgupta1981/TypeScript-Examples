import { show } from "./show.js";

export function integers(): void {
  // 1. Whole numbers
  const age = Number.isInteger(37);                 // age = true
  const zeroFraction = Number.isInteger(37.0);      // zeroFraction = true, 37.0 is 37
  const fraction = Number.isInteger(37.5);          // fraction = false
  const text = Number.isInteger("37");              // text = false

  // 2. Safe integers
  const max = Number.MAX_SAFE_INTEGER;              // max = 9007199254740991
  const safe = Number.isSafeInteger(max);           // safe = true
  const unsafe = Number.isSafeInteger(max + 1);     // unsafe = false
  const sameValue = max + 1 === max + 2;            // sameValue = true, precision lost

  show({ age, zeroFraction, fraction, text, max, safe, unsafe, sameValue });
}

export function quantityCheck(): void {
  const quantity = Number("3");
  const validQuantity = Number.isInteger(quantity) && quantity > 0;    // validQuantity = true

  const half = Number("2.5");
  const validHalf = Number.isInteger(half) && half > 0;                // validHalf = false

  show({ quantity, validQuantity, half, validHalf });
}
