import type { Cart } from "../../src/cart.ts";

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toHaveItem(name: string): boolean;
    }
  }
}

beforeEach(() => {
  jasmine.addMatchers({
    toHaveItem: () => ({
      compare(actual: Cart, name: string) {
        const pass = actual.items.some((item) => item.name === name);
        return {
          pass,
          message: "Expected cart " + (pass ? "not " : "") + "to have item " + name,
        };
      },
    }),
  });
});
