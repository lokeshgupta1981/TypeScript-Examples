export function downleveling(): void {
  const total = (price: number, qty?: number) => price * (qty ?? 1);

  class Cart {
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

  const firstLetter = (name?: string) => name?.[0];
  const square = (n: number) => n ** 2;

  const cart = new Cart();
  cart.add("apple");
  const size = cart.size;                       // size = 1
  const price = total(5);                       // price = 5
  const letter = firstLetter("Lokesh");         // letter = "L"
  const area = square(4);                       // area = 16

  console.log("size =", size, "| price =", price, "| letter =", letter, "| area =", area);
}
