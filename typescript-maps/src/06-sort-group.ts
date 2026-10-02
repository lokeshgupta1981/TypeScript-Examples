import { groupByStatus, sortByKey, sortByValue, type Order } from "./inventory.js";

export function sortAndGroup(): void {
  const stock = new Map<string, number>([
    ["BOOK-103", 8],
    ["BOOK-101", 12],
    ["BOOK-102", 5],
  ]);

  // A Map has no sort() method. Sort the entries, then build a new Map.
  console.log(sortByKey(stock));
  console.log(sortByValue(stock));

  // Map.groupBy() (ES2024) builds a Map of groups in one call
  const orders: Order[] = [
    { id: 1, sku: "BOOK-101", status: "NEW" },
    { id: 2, sku: "BOOK-102", status: "SHIPPED" },
    { id: 3, sku: "BOOK-101", status: "NEW" },
    { id: 4, sku: "BOOK-103", status: "CANCELLED" },
  ];
  const byStatus = groupByStatus(orders);
  console.log(byStatus.get("NEW")?.map((o) => o.id)); // [ 1, 3 ]
  console.log([...byStatus.keys()]);
}
