export interface Fruit {
  name: string;
  price: number;
}

export function describe(fruit: Fruit): string {
  return fruit.name + " costs " + fruit.price;
}
