import { pino } from "pino";
import { profile } from "./data.js";
import { maskCard } from "./mask.js";

export function pinoRedact(): void {
  // 1. Paths
  const logger = pino({
    redact: ["password", "email", "cards[*].cardNumber", "tokens", "address.*"],
  });
  logger.info(profile, "signup");

  // 2. Custom censor function and remove
  const partial = pino({
    redact: {
      paths: ["cards[*].cardNumber", "password"],
      censor: (value, path) => (path.at(-1) === "cardNumber" ? maskCard(String(value)) : "***"),
    },
  });
  partial.info({ cards: profile.cards, password: profile.password }, "censor");

  const removing = pino({ redact: { paths: ["password", "tokens"], remove: true } });
  removing.info({ name: "Lokesh", password: "secret123", tokens: ["tok-a"] }, "remove");

  // 3. Paths start at the logged object
  const nested = pino({ redact: ["password"] });
  nested.info({ user: { password: "secret123" } }, "nested");

  // 4. Case-sensitive, one level wildcard
  const wild = pino({ redact: ["*.password"] });
  wild.info({ password: "a", user: { password: "b", Password: "c", login: { password: "d" } } }, "wildcard");

  // 5. Message strings are not redacted
  nested.info("password=secret123");
}
