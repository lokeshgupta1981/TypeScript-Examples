import { show } from "./show.js";

export function typeofResults(): void {
  // 1. Every numeric value has the type "number"
  const intType = typeof 37;                        // intType = "number"
  const decimalType = typeof 19.99;                 // decimalType = "number"
  const nanType = typeof NaN;                       // nanType = "number"
  const infinityType = typeof Infinity;             // infinityType = "number"

  // 2. Values that are not of type "number"
  const textType = typeof "37";                     // textType = "string"
  const nullType = typeof null;                     // nullType = "object"
  const bigType = typeof 37n;                       // bigType = "bigint"
  const boxedType = typeof new Number(37);          // boxedType = "object"

  show({ intType, decimalType, nanType, infinityType, textType, nullType, bigType, boxedType });
}

export function typeofTrap(): void {
  const price = Number("abc");                      // price = NaN
  const ratio = 10 / 0;                             // ratio = Infinity
  const total = price * 3;                          // total = NaN

  const passes = typeof price === "number";         // passes = true
  const passesToo = typeof ratio === "number";      // passesToo = true

  show({ price, ratio, total, passes, passesToo });
}
