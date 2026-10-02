export function genericClasses(): void {
  class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
      this.items.push(item);
    }

    pop(): T | undefined {
      return this.items.pop();
    }

    get size(): number {
      return this.items.length;
    }
  }

  const fruits = new Stack<string>();
  fruits.push("apple");
  fruits.push("banana");
  const top = fruits.pop();                     // top = "banana"
  const size = fruits.size;                     // size = 1
  console.log(top, size);

  const numbers = new Stack<number>();
  numbers.push(5);
  console.log(numbers.pop());                   // 5
}

export function implementInterface(): void {
  interface Store<T> {
    add(item: T): void;
    getAll(): T[];
  }

  class MemoryStore<T> implements Store<T> {
    private items: T[] = [];

    add(item: T): void {
      this.items.push(item);
    }

    getAll(): T[] {
      return [...this.items];
    }
  }

  const ages = new MemoryStore<number>();
  ages.add(37);
  ages.add(35);
  const all = ages.getAll();                    // all = [37, 35]
  console.log(all);
}
