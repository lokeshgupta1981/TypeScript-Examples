import { show } from "./show.js";

export function bigintValues(): void {
  const views = 10n;
  const bigType = typeof views;                     // bigType = "bigint"
  const finite = Number.isFinite(views);            // finite = false
  const numeric = typeof views === "number" || typeof views === "bigint";   // numeric = true
  const converted = Number(views);                  // converted = 10

  show({ views, bigType, finite, numeric, converted });
}

export function numberObjects(): void {
  const boxed = new Number(37);
  const boxedType = typeof boxed;                   // boxedType = "object"
  const finite = Number.isFinite(boxed);            // finite = false
  const instance = boxed instanceof Number;         // instance = true
  const value = boxed.valueOf();                    // value = 37
  const equal = boxed === new Number(37);           // equal = false, different objects

  show({ boxedType, finite, instance, value, equal });
}
