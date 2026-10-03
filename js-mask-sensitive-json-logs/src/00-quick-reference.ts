import { pino } from "pino";

export function quickReference(): void {
  const profile = { name: "Lokesh", password: "secret123", cards: [{ cardNumber: "4111111111111111" }] };
  const SENSITIVE = new Set(["password", "cardnumber"]);

  // 1. Redact keys with a JSON.stringify() replacer
  const json = JSON.stringify(profile, (key, value) =>
    SENSITIVE.has(key.toLowerCase()) ? "[REDACTED]" : value);
  console.log("json = " + json);

  // 2. Keep the last 4 digits of a card
  const card = "4111111111111111".slice(-4).padStart(16, "*");
  console.log("card = " + card);

  // 3. Mask a card number inside free text
  const CARD = /\b(?:\d[ -]?){12,18}\d\b/g;
  const text = "Paid with 4111 1111 1111 1111".replace(CARD, (m) => "****" + m.replace(/\D/g, "").slice(-4));
  console.log("text = " + text);

  // 4. Redact paths with pino
  const logger = pino({ redact: ["password", "cards[*].cardNumber"] });
  logger.info(profile, "signup");
}
