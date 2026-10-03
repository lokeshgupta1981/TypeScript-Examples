// Plain JavaScript: TypeScript does not allow strings in isFinite() and isNaN().
import { show } from "./show.js";

export function globalIsFinite() {
  const text = isFinite("37");                      // text = true, "37" becomes 37
  const empty = isFinite("");                       // empty = true, "" becomes 0
  const nothing = isFinite(null);                   // nothing = true, null becomes 0
  const flag = isFinite(true);                      // flag = true, true becomes 1
  const unit = isFinite("12px");                    // unit = false

  show({ text, empty, nothing, flag, unit });
}

export function globalIsNaN() {
  const word = isNaN("abc");                        // word = true
  const empty = isNaN("");                          // empty = false, "" becomes 0
  const blank = isNaN(" ");                         // blank = false, " " becomes 0
  const nothing = isNaN(null);                      // nothing = false, null becomes 0
  const missing = isNaN(undefined);                 // missing = true
  const flag = isNaN(true);                         // flag = false, true becomes 1

  show({ word, empty, blank, nothing, missing, flag });
}
