import { show } from "./show.js";
import { isNumericString } from "./05-numeric-strings.js";

export function truthyCheck(): void {
  const quantity = 0;
  const price = NaN;
  const text: string = "0";

  const quantityOk = quantity ? "valid" : "invalid";    // quantityOk = "invalid", 0 is falsy
  const priceOk = price ? "valid" : "invalid";          // priceOk = "invalid", NaN is falsy
  const textOk = text ? "valid" : "invalid";            // textOk = "valid", "0" is truthy

  show({ quantityOk, priceOk, textOk });
}

export function parseIntVsNumber(): void {
  const cut = parseInt("4.5", 10);                  // cut = 4
  const prefix = parseInt("12px", 10);              // prefix = 12
  const strict = Number("12px");                    // strict = NaN
  const plus = +"42";                               // plus = 42, same as Number("42")
  const plusEmpty = +"";                            // plusEmpty = 0, same trap as Number("")

  show({ cut, prefix, strict, plus, plusEmpty });
}

export function commas(): void {
  const input = "1,000";
  const direct = Number(input);                     // direct = NaN
  const cleaned = input.replaceAll(",", "");        // cleaned = "1000"
  const valid = isNumericString(cleaned);           // valid = true
  const amount = Number(cleaned);                   // amount = 1000

  show({ direct, cleaned, valid, amount });
}

export function rangeCheck(): void {
  const age = Number("37");
  const validAge = Number.isInteger(age) && age >= 0 && age <= 130;    // validAge = true

  const price = Number("-5");
  const validPrice = Number.isFinite(price) && price >= 0;             // validPrice = false

  const broken = Number("abc");
  const notNegative = !(broken < 0);                                   // notNegative = true, NaN passes

  show({ age, validAge, price, validPrice, broken, notNegative });
}
