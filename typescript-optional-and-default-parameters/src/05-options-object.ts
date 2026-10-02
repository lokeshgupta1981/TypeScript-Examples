export function optionsObject(): void {
  interface PrintOptions {
    prefix?: string;
    upper?: boolean;
    times?: number;
  }

  function print(name: string, { prefix = "-", upper = false, times = 1 }: PrintOptions = {}): string {
    const text = (prefix + " " + name).repeat(times);
    return upper ? text.toUpperCase() : text;
  }

  const p1 = print("apple");                    // p1 = "- apple"
  const p2 = print("apple", { upper: true });   // p2 = "- APPLE"
  const p3 = print("kiwi", { times: 2, prefix: "*" }); // p3 = "* kiwi* kiwi"
  console.log(p1, p2, p3);
}
