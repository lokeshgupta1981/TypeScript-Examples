import { profile } from "./data.js";
import { maskCard, maskEmail, maskFields } from "./mask.js";

export function partialMasks(): void {
  const card = maskCard("4111 1111 1111 1111");
  const email = maskEmail("lokesh@example.com");
  const broken = maskEmail("not-an-email");
  console.log(card);
  console.log(email);
  console.log(broken);

  const json = JSON.stringify(profile, maskFields);
  console.log(json);
}
