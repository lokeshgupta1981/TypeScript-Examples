export function typesAreErased(): void {
  // 1. Pass a constructor when the function must create a T
  function create<T>(ctor: new () => T): T {
    return new ctor();
  }
  const date = create(Date);                    // date is a Date
  console.log(date instanceof Date);            // true

  // 2. Pass a type guard when the function must check a T
  function filterBy<T>(items: unknown[], isT: (x: unknown) => x is T): T[] {
    return items.filter(isT);
  }
  const isString = (x: unknown): x is string => typeof x === "string";
  const words = filterBy(["apple", 5, "banana"], isString); // words = ["apple", "banana"]
  console.log(words);
}
