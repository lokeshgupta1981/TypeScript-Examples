import { Cart } from "../src/cart.ts";

describe("toHaveItem() custom matcher", () => {
  it("finds an item by name", () => {
    const cart = new Cart();
    cart.add("apple", 2);
    expect(cart).toHaveItem("apple");
    expect(cart).not.toHaveItem("banana");
  });
});
