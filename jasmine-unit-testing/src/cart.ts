export interface Item {
  name: string;
  price: number;
  qty: number;
}

export interface StockService {
  available(name: string): Promise<number>;
}

// A discount rule receives the subtotal and returns the amount to take off.
export type Discount = (subtotal: number) => number;

export const percentOff = (percent: number): Discount =>
  (subtotal) => (subtotal * percent) / 100;

export const flatOffOver = (minimum: number, amount: number): Discount =>
  (subtotal) => (subtotal >= minimum ? amount : 0);

export class Cart {
  readonly items: Item[] = [];
  private readonly stock: StockService | undefined;

  constructor(stock?: StockService) {
    this.stock = stock;
  }

  add(name: string, price: number, qty = 1): void {
    if (price < 0) {
      throw new RangeError("Price must not be negative");
    }
    const existing = this.items.find((item) => item.name === name);
    if (existing) {
      existing.qty += qty;
    } else {
      this.items.push({ name, price, qty });
    }
  }

  get count(): number {
    return this.items.reduce((sum, item) => sum + item.qty, 0);
  }

  subtotal(): number {
    return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  total(...discounts: Discount[]): number {
    const subtotal = this.subtotal();
    const off = discounts.reduce((sum, rule) => sum + rule(subtotal), 0);
    return Math.max(0, subtotal - off);
  }

  async addIfInStock(name: string, price: number, qty = 1): Promise<number> {
    if (!this.stock) {
      throw new Error("No stock service");
    }
    const available = await this.stock.available(name);
    if (available < qty) {
      throw new Error("Out of stock: " + name);
    }
    this.add(name, price, qty);
    return this.count;
  }

  // Empties the cart after the given time, for example a 15-minute reservation.
  expireAfter(ms: number, onExpire?: () => void): void {
    setTimeout(() => {
      this.items.length = 0;
      onExpire?.();
    }, ms);
  }
}
