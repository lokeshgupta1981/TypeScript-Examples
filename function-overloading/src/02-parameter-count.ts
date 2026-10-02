export function parameterCount(): void {
  function makeDate(timestamp: number): Date;
  function makeDate(year: number, month: number, day: number): Date;
  function makeDate(yearOrTime: number, month?: number, day?: number): Date {
    if (month !== undefined && day !== undefined) {
      return new Date(Date.UTC(yearOrTime, month, day));
    }
    return new Date(yearOrTime);
  }

  const d1 = makeDate(0);                       // d1 = 1970-01-01T00:00:00.000Z
  const d2 = makeDate(2026, 0, 15);             // d2 = 2026-01-15T00:00:00.000Z
  console.log(d1.toISOString(), d2.toISOString());
}
