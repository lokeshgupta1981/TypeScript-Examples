import { profile } from "./data.js";
import { redactKeys, maskDeep } from "./mask.js";

export function consoleLogging(): void {
  // 1. Wrong: prints every field
  console.log(profile.password);

  // 2. Masked JSON string
  console.log(JSON.stringify(profile, redactKeys));

  // 3. Masked object, printed by util.inspect
  console.log(maskDeep(profile));
}
