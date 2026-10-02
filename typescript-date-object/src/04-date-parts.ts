export function dateParts(): void {
  const date = new Date(2026, 9, 3, 14, 30, 15);

  // 1. Local parts
  const hours = date.getHours();                // hours = 14
  const minutes = date.getMinutes();            // minutes = 30
  const seconds = date.getSeconds();            // seconds = 15

  // 2. UTC parts (India is UTC+05:30)
  const utcHours = date.getUTCHours();          // utcHours = 9
  const utcMinutes = date.getUTCMinutes();      // utcMinutes = 0

  // 3. Offset from UTC in minutes
  const offset = date.getTimezoneOffset();      // offset = -330

  console.log("hours =", hours, "| minutes =", minutes, "| seconds =", seconds);
  console.log("utcHours =", utcHours, "| utcMinutes =", utcMinutes, "| offset =", offset);
}
