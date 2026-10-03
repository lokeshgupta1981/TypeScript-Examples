// Rough timing of each masking technique on the sample profile.
// Run with: npm run bench. Numbers depend on the machine; compare them only with each other.
import { pino } from "pino";
import os from "node:os";
import { profile } from "./data.js";
import { redactKeys, maskFields, maskDeep } from "./mask.js";

const RUNS = 200_000;

function time(label: string, task: () => void): void {
  for (let i = 0; i < 20_000; i++) task();
  const start = process.hrtime.bigint();
  for (let i = 0; i < RUNS; i++) task();
  const ns = Number(process.hrtime.bigint() - start) / RUNS;
  console.log(label.padEnd(42) + (ns / 1000).toFixed(2) + " us per call");
}

const sink = pino.destination({ dest: "/dev/null", sync: true });
const plainLogger = pino({ base: undefined }, sink);
const redactLogger = pino(
  { base: undefined, redact: ["password", "cards[*].cardNumber", "tokens"] },
  sink,
);

console.log("Node " + process.version + ", " + os.cpus()[0]?.model + ", " + os.cpus().length + " cores");
time("JSON.stringify() without masking", () => JSON.stringify(profile));
time("JSON.stringify() + redactKeys replacer", () => JSON.stringify(profile, redactKeys));
time("JSON.stringify() + maskFields replacer", () => JSON.stringify(profile, maskFields));
time("maskDeep() (structuredClone) + stringify", () => JSON.stringify(maskDeep(profile)));
time("JSON.parse(JSON.stringify(replacer))", () => JSON.parse(JSON.stringify(profile, redactKeys)));
time("pino info() without redact", () => plainLogger.info(profile, "signup"));
time("pino info() with redact paths", () => redactLogger.info(profile, "signup"));
