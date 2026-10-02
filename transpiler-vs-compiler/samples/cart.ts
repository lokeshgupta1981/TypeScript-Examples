export const total = (price: number, qty?: number) => price * (qty ?? 1);

export class Cart {
  items: string[] = [];
  #count = 0;
  add(item: string): void {
    this.items.push(item);
    this.#count++;
  }
  get size(): number {
    return this.#count;
  }
}

export const firstLetter = (name?: string) => name?.[0];
export const square = (n: number) => n ** 2;
