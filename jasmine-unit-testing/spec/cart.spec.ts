import { Cart, flatOffOver, percentOff } from "../src/cart.ts";

describe("Cart", () => {
  let cart: Cart;

  beforeEach(() => {
    cart = new Cart();
    cart.add("apple", 2);
    cart.add("banana", 1, 3);
  });

  describe("add()", () => {
    it("counts every unit", () => {
      expect(cart.count).toBe(4);
    });

    it("merges the same item into one line", () => {
      cart.add("apple", 2);
      expect(cart.items.length).toBe(2);
      expect(cart.items[0]).toEqual({ name: "apple", price: 2, qty: 2 });
    });

    it("compares objects by value with toEqual, not toBe", () => {
      expect(cart.items[0]).not.toBe({ name: "apple", price: 2, qty: 1 });
      expect(cart.items[0]).toEqual({ name: "apple", price: 2, qty: 1 });
    });

    it("keeps the item names", () => {
      const names = cart.items.map((item) => item.name);
      expect(names).toContain("banana");
      expect(names).not.toContain("cherry");
    });

    it("rejects a negative price", () => {
      expect(() => cart.add("apple", -1)).toThrowError(RangeError, "Price must not be negative");
      expect(() => cart.add("apple", -1)).toThrowError(/negative/);
    });

    it("matches part of an object", () => {
      expect(cart.items[1]).toEqual(jasmine.objectContaining({ name: "banana" }));
      expect(cart.items[1]).toEqual({ name: "banana", price: jasmine.any(Number), qty: 3 });
    });
  });

  describe("total()", () => {
    it("adds price times quantity", () => {
      expect(cart.total()).toBe(5);
      expect(cart.total() > 0).toBeTruthy();
    });

    it("uses toBeCloseTo for decimal prices", () => {
      const small = new Cart();
      small.add("pen", 0.1);
      small.add("clip", 0.2);
      expect(small.total()).not.toBe(0.3);
      expect(small.total()).toBeCloseTo(0.3, 2);
    });

    it("applies discount rules", () => {
      expect(cart.total(percentOff(10))).toBeCloseTo(4.5, 2);
      expect(cart.total(flatOffOver(5, 1))).toBe(4);
      expect(cart.total(flatOffOver(10, 1))).toBe(5);
    });

    it("never returns a negative total", () => {
      expect(cart.total(flatOffOver(1, 100))).toBe(0);
    });
  });

  describe("empty cart", () => {
    it("has a total of 0", () => {
      const empty = new Cart();
      expect(empty.total()).toBe(0);
      expect(empty.items).toEqual([]);
      expect(new Cart().count).toBeFalsy();
    });
  });
});
