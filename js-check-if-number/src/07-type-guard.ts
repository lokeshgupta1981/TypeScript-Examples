import { show } from "./show.js";
import { isNumericString } from "./05-numeric-strings.js";

function isNumber(value: unknown): value is number {
  return Number.isFinite(value);
}

export function toNumber(value: unknown): number | undefined {
  if (isNumber(value)) return value;
  if (typeof value === "string" && isNumericString(value)) return Number(value);
  return undefined;
}

export function narrowWithTypeof(): void {
  const input: unknown = JSON.parse("3");

  if (typeof input === "number") {
    const doubled = input * 2;                      // input is number here
    console.log("doubled = " + doubled);            // doubled = 6
  }
}

export function guardUse(): void {
  const values: unknown[] = JSON.parse('[3, "3", null, 4.5]');

  const numbers = values.filter(isNumber);          // numbers = [3, 4.5], type number[]
  const sum = numbers.reduce((a, b) => a + b, 0);   // sum = 7.5

  show({ numbers, sum });
}

export function toNumberUse(): void {
  const age = toNumber(37);                         // age = 37
  const price = toNumber(" 19.99 ");                // price = 19.99
  const unit = toNumber("12px");                    // unit = undefined
  const nan = toNumber(NaN);                        // nan = undefined

  show({ age, price, unit, nan });
}
