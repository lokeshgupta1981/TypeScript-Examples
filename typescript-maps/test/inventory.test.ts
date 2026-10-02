import { test } from "node:test";
import assert from "node:assert/strict";
import {
  fromObject,
  groupByStatus,
  increment,
  sortByKey,
  sortByValue,
  toObject,
  type Order,
} from "../src/inventory.js";

test("increment starts a missing key at 0", () => {
  const stock = new Map<string, number>();
  assert.equal(increment(stock, "Lokesh"), 1);
  assert.equal(increment(stock, "Lokesh", 4), 5);
});

test("toObject and fromObject round-trip", () => {
  const stock = new Map([["Lokesh", 12], ["Raj", 5]]);
  const obj = toObject(stock);
  assert.deepEqual(obj, { "Lokesh": 12, "Raj": 5 });
  assert.deepEqual(fromObject(obj), stock);
});

test("sorting returns a new Map and keeps the original", () => {
  const stock = new Map([["B", 8], ["C", 12], ["A", 5]]);
  assert.deepEqual([...sortByKey(stock).keys()], ["A", "B", "C"]);
  assert.deepEqual([...sortByValue(stock).values()], [5, 8, 12]);
  assert.deepEqual([...stock.keys()], ["B", "C", "A"]);
});

test("groupByStatus groups orders by status", () => {
  const orders: Order[] = [
    { id: 1, sku: "X", status: "NEW" },
    { id: 2, sku: "Y", status: "SHIPPED" },
    { id: 3, sku: "Z", status: "NEW" },
  ];
  const groups = groupByStatus(orders);
  assert.deepEqual(groups.get("NEW")?.map((o) => o.id), [1, 3]);
  assert.equal(groups.get("CANCELLED"), undefined);
});

test("JSON.stringify writes an empty object for a Map", () => {
  const stock = new Map([["Lokesh", 12]]);
  assert.equal(JSON.stringify(stock), "{}");
  assert.equal(JSON.stringify(Object.fromEntries(stock)), '{"Lokesh":12}');
});
