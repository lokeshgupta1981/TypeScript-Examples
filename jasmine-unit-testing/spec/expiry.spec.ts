import { Cart } from "../src/cart.ts";

describe("Cart expiry", () => {
  beforeEach(() => {
    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it("empties the cart after 15 minutes", () => {
    const cart = new Cart();
    const onExpire = jasmine.createSpy("onExpire");
    cart.add("apple", 2);
    cart.expireAfter(15 * 60 * 1000, onExpire);

    jasmine.clock().tick(15 * 60 * 1000 - 1);
    expect(cart.count).toBe(1);
    expect(onExpire).not.toHaveBeenCalled();

    jasmine.clock().tick(1);
    expect(cart.count).toBe(0);
    expect(onExpire).toHaveBeenCalled();
  });
});
