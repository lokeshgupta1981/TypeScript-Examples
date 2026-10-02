export function formatting(): void {
  const date = new Date(2026, 9, 3, 14, 30);

  // 1. Built-in formats
  const iso = date.toISOString();               // iso = "2026-10-03T09:00:00.000Z"
  const short = date.toDateString();            // short = "Sat Oct 03 2026"

  // 2. Locale formats with options
  const long = date.toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });                                           // long = "Saturday, October 3, 2026"
  const german = date.toLocaleDateString("de-DE");   // german = "3.10.2026"

  // 3. Another time zone
  const newYork = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium", timeStyle: "short", timeZone: "America/New_York",
  }).format(date);                              // newYork = "Oct 3, 2026, 5:00 AM"

  // 4. Custom format dd/MM/yyyy
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const custom = dd + "/" + mm + "/" + date.getFullYear();   // custom = "03/10/2026"

  console.log("iso =", iso, "| short =", short);
  console.log("long =", long, "| german =", german);
  console.log("newYork =", newYork, "| custom =", custom);
}
