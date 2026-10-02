export function quickReference(): void {
  // 1. Current date and time
  const now = new Date();                       // e.g. Sat Oct 03 2026 14:30:00 GMT+0530
  const millis = Date.now();                    // e.g. 1790933400000
  const today = now.toLocaleDateString("en-CA");   // e.g. "2026-10-03", local date

  // 2. A specific date (month is 0-based)
  const date = new Date(2026, 9, 3);            // 3 October 2026, 00:00 local time
  const utc = new Date("2026-10-03T00:00:00Z"); // 3 October 2026, 00:00 UTC

  // 3. Read parts
  const year = date.getFullYear();              // year = 2026
  const month = date.getMonth();                // month = 9 (October)
  const day = date.getDate();                   // day = 3
  const weekday = date.getDay();                // weekday = 6 (Saturday)

  // 4. Add days
  const later = new Date(date);
  later.setDate(later.getDate() + 30);          // later = 2 November 2026

  // 5. Compare
  const same = date.getTime() === new Date(2026, 9, 3).getTime();   // same = true
  const before = date < later;                  // before = true

  // 6. Format
  const us = date.toLocaleDateString("en-US");  // us = "10/3/2026"
  const gb = date.toLocaleDateString("en-GB");  // gb = "03/10/2026"
  const iso = date.toISOString();               // iso = "2026-10-02T18:30:00.000Z" in India (UTC+05:30)

  console.log("now =", now.toString());
  console.log("millis =", millis, "| today =", today);
  console.log("utc =", utc.toISOString());
  console.log("year =", year, "| month =", month, "| day =", day, "| weekday =", weekday);
  console.log("later =", later.toDateString());
  console.log("same =", same, "| before =", before);
  console.log("us =", us, "| gb =", gb, "| iso =", iso);
}
