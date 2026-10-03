import { show } from "./show.js";

export function numberIsFinite(): void {
  const age = Number.isFinite(37);                  // age = true
  const price = Number.isFinite(19.99);             // price = true
  const nan = Number.isFinite(NaN);                 // nan = false
  const infinite = Number.isFinite(10 / 0);         // infinite = false
  const text = Number.isFinite("37");               // text = false
  const empty = Number.isFinite(null);              // empty = false

  show({ age, price, nan, infinite, text, empty });
}
