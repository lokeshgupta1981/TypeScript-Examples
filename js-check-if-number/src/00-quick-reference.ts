import { show } from "./show.js";

// Helpers
function isNumber(value: unknown): value is number {
  return Number.isFinite(value);
}

function isNumericString(value: string): boolean {
  const text = value.trim();
  return /^-?\d+(\.\d+)?$/.test(text) && Number.isFinite(Number(text));
}

export function quickReference(): void {
  const age = 37;
  const quantity = "3";                             // form inputs are strings
  const price = " 19.99 ";

  // 1. Check the type
  const isNumberType = typeof age === "number";     // isNumberType = true
  const nanType = typeof NaN;                       // nanType = "number"

  // 2. Check for a finite number (recommended)
  const finite = Number.isFinite(age);              // finite = true
  const finiteNaN = Number.isFinite(NaN);           // finiteNaN = false
  const finiteText = Number.isFinite(quantity);     // finiteText = false, no conversion

  // 3. Check for NaN
  const notANumber = Number.isNaN(Number("abc"));   // notANumber = true

  // 4. Check for whole numbers
  const whole = Number.isInteger(5.0);              // whole = true
  const safe = Number.isSafeInteger(2 ** 53);       // safe = false

  // 5. Convert and check a string
  const qty = Number(quantity);                     // qty = 3
  const empty = Number("");                         // empty = 0, not NaN
  const px = parseFloat("12px");                    // px = 12
  const valid = isNumericString(price);             // valid = true

  // 6. BigInt has its own type
  const bigType = typeof 10n;                       // bigType = "bigint"

  // 7. TypeScript type guard
  const input: unknown = JSON.parse("42");
  const total = isNumber(input) ? input * 2 : 0;    // total = 84

  show({ isNumberType, nanType, finite, finiteNaN, finiteText, notANumber, whole, safe,
    qty, empty, px, valid, bigType, total });
}
