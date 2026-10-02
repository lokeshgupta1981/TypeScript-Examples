export function currentDate(): void {
  const now = new Date();

  // 1. Today as YYYY-MM-DD in local time
  const today = now.toLocaleDateString("en-CA");          // e.g. "2026-10-03"

  // 2. Today as YYYY-MM-DD in UTC
  const todayUtc = now.toISOString().slice(0, 10);        // e.g. "2026-10-03"

  // 3. Current time as HH:mm
  const time = now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });   // e.g. "14:30"

  // 4. Measure elapsed time
  const start = Date.now();
  const elapsed = Date.now() - start;                     // e.g. 0 (milliseconds)

  console.log("today =", today, "| todayUtc =", todayUtc, "| time =", time, "| elapsed =", elapsed);
}
