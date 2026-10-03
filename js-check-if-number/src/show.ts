// Prints each value as "name = value"; strings are shown in quotes.
export function show(values: Record<string, unknown>): void {
  for (const [name, value] of Object.entries(values)) {
    console.log(name + " = " + format(value));
  }
}

export function format(value: unknown): string {
  if (typeof value === "string") return JSON.stringify(value);
  if (typeof value === "bigint") return value + "n";
  if (Array.isArray(value)) return "[" + value.map(format).join(", ") + "]";
  return String(value);
}
