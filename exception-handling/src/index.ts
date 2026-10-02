import { quickReference } from "./00-quick-reference.js";
import { tryCatchFinally } from "./01-try-catch-finally.js";
import { unknownInCatch } from "./02-unknown-in-catch.js";
import { builtInErrors } from "./03-built-in-errors.js";
import { customErrors, errorCause } from "./04-custom-errors.js";
import { narrowing } from "./05-narrowing.js";
import { finallyBlock } from "./06-finally.js";
import { asyncErrors, missingAwait } from "./07-async-errors.js";
import { resultType } from "./08-result.js";

const sections: [string, () => void | Promise<void>][] = [
  ["Quick reference", quickReference],
  ["try, catch and finally", tryCatchFinally],
  ["unknown in catch", unknownInCatch],
  ["Built-in error types", builtInErrors],
  ["Custom error classes", customErrors],
  ["Error cause", errorCause],
  ["Narrowing with instanceof", narrowing],
  ["finally", finallyBlock],
  ["Async errors", asyncErrors],
  ["Missing await", missingAwait],
  ["Result type", resultType],
];

for (const [title, run] of sections) {
  console.log("=== " + title + " ===");
  await run();
}
