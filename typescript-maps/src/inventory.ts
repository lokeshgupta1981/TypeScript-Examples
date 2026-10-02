// Small, reusable helpers used by the demos and the tests.

export type OrderStatus = "NEW" | "SHIPPED" | "CANCELLED";

export interface Order {
  id: number;
  sku: string;
  status: OrderStatus;
}

// Adds "by" to the current count of a key. A missing key starts at 0.
export function increment(map: Map<string, number>, key: string, by = 1): number {
  const next = (map.get(key) ?? 0) + by;
  map.set(key, next);
  return next;
}

// Map -> plain object, for example before sending it as JSON.
export function toObject<V>(map: Map<string, V>): Record<string, V> {
  return Object.fromEntries(map);
}

// Plain object -> Map.
export function fromObject<V>(obj: Record<string, V>): Map<string, V> {
  return new Map(Object.entries(obj));
}

// Returns a new Map sorted by value, smallest first. The original map is not changed.
export function sortByValue(map: Map<string, number>): Map<string, number> {
  return new Map([...map].sort(([, a], [, b]) => a - b));
}

// Returns a new Map sorted by key in alphabetical order.
export function sortByKey<V>(map: Map<string, V>): Map<string, V> {
  return new Map([...map].sort(([a], [b]) => a.localeCompare(b)));
}

// Groups orders by their status using Map.groupBy (ES2024).
export function groupByStatus(orders: Order[]): Map<OrderStatus, Order[]> {
  return Map.groupBy(orders, (order) => order.status);
}
