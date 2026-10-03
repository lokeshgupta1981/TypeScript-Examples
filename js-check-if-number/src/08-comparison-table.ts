// Builds the comparison tables of the article by calling every check on every value.
import { format } from "./show.js";
import { toNumber } from "./07-type-guard.js";

type Check = (value: any) => unknown;

const values: [string, unknown][] = [
  ["42", 42],
  ["4.5", 4.5],
  ["NaN", NaN],
  ["Infinity", Infinity],
  ['"42"', "42"],
  ['" 42 "', " 42 "],
  ['"4e2"', "4e2"],
  ['""', ""],
  ['"0x10"', "0x10"],
  ['"12px"', "12px"],
  ['"abc"', "abc"],
  ["null", null],
  ["undefined", undefined],
  ["true", true],
  ["10n", 10n],
  ["new Number(42)", new Number(42)],
];

const allChecks: [string, Check][] = [
  ["typeof", (v) => typeof v],
  ["Number.isFinite()", (v) => Number.isFinite(v)],
  ["isFinite()", (v) => isFinite(v)],
  ["Number.isNaN()", (v) => Number.isNaN(v)],
  ["isNaN()", (v) => isNaN(v)],
  ["Number.isInteger()", (v) => Number.isInteger(v)],
  ["Number()", (v) => Number(v)],
  ["parseFloat()", (v) => parseFloat(v)],
  ["toNumber()", (v) => toNumber(v)],
];

function cell(check: Check, value: unknown): string {
  try {
    return "*" + format(check(value)) + "*";
  } catch (e) {
    return "*" + (e as Error).name + "*";
  }
}

function printTable(rows: [string, unknown][], checks: [string, Check][]): void {
  console.log("| Value | " + checks.map(([name]) => "*" + name + "*").join(" | ") + " |");
  console.log("|---|" + checks.map(() => "---").join("|") + "|");
  for (const [label, value] of rows) {
    console.log("| *" + label + "* | " + checks.map(([, check]) => cell(check, value)).join(" | ") + " |");
  }
}

export function coercionTable(): void {
  const labels = ['"abc"', '""', '" 42 "', '"12px"', "null", "undefined", "true", "NaN"];
  const rows = labels.map((label) => values.find(([l]) => l === label)!);
  const checks = allChecks.filter(([name]) => ["Number()", "isNaN()", "Number.isNaN()"].includes(name));
  printTable(rows, [checks[2], checks[1], checks[0]]);
}

export function comparisonTable(): void {
  printTable(values, allChecks);
}
