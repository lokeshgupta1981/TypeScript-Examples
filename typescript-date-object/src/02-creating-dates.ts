export function creatingDates(): void {
  // 1. Milliseconds since 1 January 1970 UTC
  const fromMillis = new Date(0);               // 1970-01-01T00:00:00.000Z

  // 2. ISO string with time zone: same instant everywhere
  const fromIso = new Date("2026-10-03T09:00:00Z");

  // 3. Year, month (0-based), day, hours, minutes in local time
  const fromParts = new Date(2026, 9, 3, 14, 30);

  // 4. UTC parts
  const fromUtcParts = new Date(Date.UTC(2026, 9, 3, 14, 30));

  // 5. Date-only string: parsed as UTC
  const dateOnly = new Date("2026-10-03");      // 05:30 on 3 October in India

  // 6. Date-time string without zone: parsed as local time
  const localTime = new Date("2026-10-03T00:00");   // 00:00 on 3 October in India

  // 7. Invalid input
  const invalid = new Date("hello");
  const isInvalid = Number.isNaN(invalid.getTime());   // isInvalid = true

  console.log("fromMillis =", fromMillis.toISOString());
  console.log("fromIso =", fromIso.toISOString());
  console.log("fromParts =", fromParts.toString());
  console.log("fromUtcParts =", fromUtcParts.toISOString());
  console.log("dateOnly =", dateOnly.toString());
  console.log("localTime =", localTime.toString());
  console.log("invalid =", String(invalid), "| isInvalid =", isInvalid);
}
