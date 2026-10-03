import { Cart, percentOff, type StockService } from "../src/cart.ts";

describe("Shopping cart", () => {
  let cart: Cart;

  // 1. Fresh cart before each spec
  beforeEach(() => {
    cart = new Cart();
    cart.add("apple", 2);
    cart.add("banana", 1, 3);
  });

  // 2. Matchers
  it("calculates the total", () => {
    expect(cart.total()).toBe(5);                                       // 5 === 5
    expect(cart.items[0]).toEqual({ name: "apple", price: 2, qty: 1 }); // deep equality
    expect(cart.total(percentOff(10))).toBeCloseTo(4.5, 2);             // 4.5
    expect(cart.items.map((item) => item.name)).toContain("banana");
    expect(() => cart.add("apple", -1)).toThrowError(RangeError);
  });

  // 3. Spy object and async expectation
  it("checks the stock", async () => {
    const stock = jasmine.createSpyObj<StockService>("StockService", ["available"]);
    stock.available.and.returnValue(Promise.resolve(0));
    const shop = new Cart(stock);

    await expectAsync(shop.addIfInStock("cherry", 3)).toBeRejectedWithError("Out of stock: cherry");
    expect(stock.available).toHaveBeenCalledWith("cherry");
  });

  // 4. Mock clock for timers
  it("expires after 15 minutes", () => {
    jasmine.clock().install();
    cart.expireAfter(15 * 60 * 1000);
    jasmine.clock().tick(15 * 60 * 1000);
    expect(cart.count).toBe(0);
    jasmine.clock().uninstall();
  });
});
