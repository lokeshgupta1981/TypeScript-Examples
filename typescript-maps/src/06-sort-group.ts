// Section 6: Sorting a Map and grouping with Map.groupBy()
type OrderStatus = "NEW" | "SHIPPED" | "CANCELLED";
interface Order { id: number; status: OrderStatus; }

export function sortAndGroup(): void {
  const stock = new Map([["BOOK-103", 8], ["BOOK-101", 12], ["BOOK-102", 5]]);

  const byKey = new Map([...stock].sort(([a], [b]) => a.localeCompare(b)));
  console.log(byKey); // Map(3) { 'BOOK-101' => 12, 'BOOK-102' => 5, 'BOOK-103' => 8 }

  const byValue = new Map([...stock].sort(([, a], [, b]) => a - b));
  console.log(byValue); // Map(3) { 'BOOK-102' => 5, 'BOOK-103' => 8, 'BOOK-101' => 12 }

  const orders: Order[] = [
    { id: 1, status: "NEW" },
    { id: 2, status: "SHIPPED" },
    { id: 3, status: "NEW" },
  ];

  const byStatus: Map<OrderStatus, Order[]> = Map.groupBy(orders, (order) => order.status);
  console.log(byStatus.get("NEW")?.map((o) => o.id)); // [ 1, 3 ]
  console.log([...byStatus.keys()]); // [ 'NEW', 'SHIPPED' ]
}
