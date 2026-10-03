import { show } from "./show.js";

export function isNumericString(value: string): boolean {
  const text = value.trim();
  return /^-?\d+(\.\d+)?$/.test(text) && Number.isFinite(Number(text));
}

export function convertStrings(): void {
  // 1. Number() converts the whole string
  const qty = Number("42");                         // qty = 42
  const padded = Number(" 42 ");                    // padded = 42, spaces are ignored
  const exponent = Number("4e2");                   // exponent = 400
  const hex = Number("0x10");                       // hex = 16
  const empty = Number("");                         // empty = 0
  const unit = Number("12px");                      // unit = NaN

  // 2. parseFloat() reads up to the first invalid character
  const pixels = parseFloat("12px");                // pixels = 12
  const hexPrefix = parseFloat("0x10");             // hexPrefix = 0
  const emptyText = parseFloat("");                 // emptyText = NaN

  show({ qty, padded, exponent, hex, empty, unit, pixels, hexPrefix, emptyText });
}

export function regexCheck(): void {
  const decimal = /^-?\d+(\.\d+)?$/;

  const price = decimal.test("19.99");              // price = true
  const negative = decimal.test("-5");              // negative = true
  const padded = decimal.test(" 42 ");              // padded = false
  const exponent = decimal.test("4e2");             // exponent = false
  const empty = decimal.test("");                   // empty = false

  show({ price, negative, padded, exponent, empty });
}

export function helperCheck(): void {
  const priceInput = " 19.99 ";
  const valid = isNumericString(priceInput);        // valid = true
  const price = Number(priceInput);                 // price = 19.99

  const unit = isNumericString("12px");             // unit = false
  const empty = isNumericString("");                // empty = false
  const hex = isNumericString("0x10");              // hex = false
  const huge = isNumericString("9".repeat(400));    // huge = false, Number() gives Infinity

  show({ valid, price, unit, empty, hex, huge });
}
