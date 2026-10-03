import { Cart } from "../src/cart.ts";

describe("Cart total", () => {
  it("adds two decimal prices", () => {
    const cart = new Cart();
    cart.add("pen", 0.1);
    cart.add("clip", 0.2);
    expect(cart.total()).toBe(0.3);
  });

  it("stores the item", () => {
    const cart = new Cart();
    cart.add("pen", 0.1);
    expect(cart.items[0]).toEqual({ name: "pen", price: 0.1, qty: 2 });
  });

  xit("applies a coupon code", () => {
    expect(true).toBeTrue();
  });
});
