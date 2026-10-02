export function typingDates(): void {
  interface Order { id: number; createdAt: Date }

  const order: Order = { id: 1, createdAt: new Date(2026, 9, 3) };

  // 1. JSON turns a Date into a string
  const json = JSON.stringify(order);           // json = {"id":1,"createdAt":"2026-10-02T18:30:00.000Z"}

  // 2. Parsing does not turn it back
  const parsed = JSON.parse(json) as Order;
  const isDate = parsed.createdAt instanceof Date;   // isDate = false, it is a string

  // 3. Convert explicitly
  const restored: Order = { ...parsed, createdAt: new Date(parsed.createdAt) };
  const day = restored.createdAt.getDate();     // day = 3

  console.log("json =", json);
  console.log("isDate =", isDate, "| day =", day);
}
