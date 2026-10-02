// Section 6: Sorting a Map and grouping with Map.groupBy()
type Status = "new" | "shipped" | "cancelled";
interface Order { id: number; status: Status; }

export function sortAndGroup(): void {
  const ages = new Map([["Raj", 35], ["John", 40], ["Lokesh", 37]]);

  // 1. By key
  const byName = new Map([...ages].sort(([a], [b]) => a.localeCompare(b)));
  console.log(byName); // John 40, Lokesh 37, Raj 35

  // 2. By value
  const byAge = new Map([...ages].sort(([, a], [, b]) => a - b));
  console.log(byAge); // Raj 35, Lokesh 37, John 40

  const orders: Order[] = [
    { id: 1, status: "new" },
    { id: 2, status: "shipped" },
    { id: 3, status: "new" },
  ];

  const byStatus: Map<Status, Order[]> = Map.groupBy(orders, (o) => o.status);
  const newIds = byStatus.get("new")?.map((o) => o.id); // newIds = [1, 3]
  const statuses = [...byStatus.keys()]; // statuses = ["new", "shipped"]
  console.log(newIds, statuses);
}
