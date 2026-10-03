import { Cart, type StockService } from "../src/cart.ts";

describe("Cart with a stock service", () => {
  it("checks the stock with spyOn()", async () => {
    const stock: StockService = { available: async () => 0 };
    const spy = spyOn(stock, "available").and.returnValue(Promise.resolve(10));
    const cart = new Cart(stock);

    const count = await cart.addIfInStock("apple", 2, 3);

    expect(count).toBe(3);
    expect(spy).toHaveBeenCalledWith("apple");
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("uses a fake implementation with and.callFake()", async () => {
    const stock = jasmine.createSpyObj<StockService>("StockService", ["available"]);
    stock.available.and.callFake(async (name) => (name === "apple" ? 5 : 0));
    const cart = new Cart(stock);

    await expectAsync(cart.addIfInStock("apple", 2)).toBeResolvedTo(1);
    await expectAsync(cart.addIfInStock("banana", 1)).toBeRejectedWithError("Out of stock: banana");
    expect(stock.available).toHaveBeenCalled();
    expect(stock.available).toHaveBeenCalledWith("apple");
    expect(stock.available).toHaveBeenCalledTimes(2);

    const total = stock.available.calls.count();
    const second = stock.available.calls.argsFor(1);
    expect(total).toBe(2);
    expect(second).toEqual(["banana"]);
  });

  it("creates a spy object with return values", async () => {
    const stock = jasmine.createSpyObj<StockService>("StockService", {
      available: Promise.resolve(1),
    });
    const cart = new Cart(stock);

    await expectAsync(cart.addIfInStock("apple", 2, 2)).toBeRejectedWithError(Error, /Out of stock/);
    expect(stock.available).toHaveBeenCalledOnceWith("apple");
  });

  it("creates spy objects in two forms", async () => {
    // 1. Method names only; configure each spy later
    const stock1 = jasmine.createSpyObj<StockService>("StockService", ["available"]);

    // 2. Method names with return values
    const stock2 = jasmine.createSpyObj<StockService>("StockService", {
      available: Promise.resolve(1),
    });

    expect(stock1.available("apple")).toBeUndefined();
    await expectAsync(stock2.available("apple")).toBeResolvedTo(1);
  });

  it("fails without a stock service", async () => {
    await expectAsync(new Cart().addIfInStock("apple", 2)).toBeRejectedWithError("No stock service");
  });
});
