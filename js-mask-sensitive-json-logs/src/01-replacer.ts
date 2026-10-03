import { profile } from "./data.js";
import { redactKeys } from "./mask.js";

export function replacerBasics(): void {
  // 1. Without a replacer, everything is written
  const raw = JSON.stringify(profile);
  console.log(raw);

  // 2. With the replacer
  const masked = JSON.stringify(profile, redactKeys, 2);
  console.log(masked);

  // 3. Key case does not matter
  const upper = JSON.stringify({ PASSWORD: "secret123" }, redactKeys);
  console.log(upper);

  // 4. Keys the replacer receives
  JSON.stringify({ cards: [{ cardNumber: "4111111111111111" }] }, (key, value) => {
    console.log(JSON.stringify(key));
    return value;
  });
}

export function allowList(): void {
  // Allow list: only these keys are written, at every level
  const safe = JSON.stringify(profile, ["name", "address", "city"]);
  console.log(safe);
}
