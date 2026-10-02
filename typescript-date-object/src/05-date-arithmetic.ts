export function dateArithmetic(): void {
  const start = new Date(2026, 9, 3);

  // 1. Add and subtract days, months and years
  const plusDays = new Date(start);
  plusDays.setDate(plusDays.getDate() + 30);    // 2 November 2026
  const minusDays = new Date(start);
  minusDays.setDate(minusDays.getDate() - 7);   // 26 September 2026
  const nextYear = new Date(start);
  nextYear.setFullYear(nextYear.getFullYear() + 1);   // 3 October 2027

  // 2. Month end: 31 January + 1 month overflows
  const jan31 = new Date(2026, 0, 31);
  jan31.setMonth(jan31.getMonth() + 1);         // 3 March 2026, not 28 February

  // 3. Days between two dates
  const end = new Date(2026, 11, 25);
  const msPerDay = 24 * 60 * 60 * 1000;
  const daysLeft = Math.round((end.getTime() - start.getTime()) / msPerDay);   // daysLeft = 83

  console.log("plusDays =", plusDays.toDateString(), "| minusDays =", minusDays.toDateString());
  console.log("nextYear =", nextYear.toDateString(), "| jan31 =", jan31.toDateString());
  console.log("daysLeft =", daysLeft);
}
