export function compiledOutput(): void {
  interface Order { id: number; total: number }

  enum Status { New, Shipped }

  const order: Order = { id: 1, total: 250 };
  const current: Status = Status.Shipped;       // current = 1

  console.log("order =", JSON.stringify(order));
  console.log("current =", current);
}
