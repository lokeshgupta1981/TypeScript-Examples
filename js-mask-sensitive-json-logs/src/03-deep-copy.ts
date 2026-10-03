import { profile } from "./data.js";
import { redactKeys, maskDeep } from "./mask.js";

export function deepCopy(): void {
  // 1. structuredClone() + walk
  const safe = maskDeep(profile);
  console.log(safe.password, safe.cards[0].cardNumber, safe.tokens);
  console.log(profile.password);

  // 2. JSON round trip with the replacer
  const copy = JSON.parse(JSON.stringify(profile, redactKeys));
  console.log(copy.password, copy.cards[1].cardNumber);

  // 3. Differences
  const event = { at: new Date(0), amount: 10n };
  const cloned = maskDeep(event);
  console.log(cloned.at instanceof Date, typeof cloned.amount);
  try {
    JSON.stringify(event, redactKeys);
  } catch (e) {
    console.log((e as Error).message);
  }
  try {
    maskDeep({ name: "Lokesh", onSave: () => true });
  } catch (e) {
    console.log((e as Error).name);
  }
}
