export function defaultTypeParameters(): void {
  // 1. Default type on an interface
  interface Result<T = string> {
    ok: boolean;
    data: T;
  }
  const text: Result = { ok: true, data: "done" };   // T = string
  const total: Result<number> = { ok: true, data: 5 }; // T = number
  console.log(text.data, total.data);

  // 2. Default type on a function
  function emptyList<T = string>(): T[] {
    return [];
  }
  const names = emptyList();                    // type string[]
  const ages = emptyList<number>();             // type number[]
  names.push("Lokesh");
  ages.push(37);
  console.log(names, ages);
}
