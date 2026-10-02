export function multiLine(): void {
  // 1. Line breaks and indentation are part of the string
  const list = `Fruits:
  - apple
  - banana`;
  // list = "Fruits:\n  - apple\n  - banana"

  // 2. Build lines without extra spaces
  const rows = ["Fruits:", "- apple", "- banana"].join("\n");
  // rows = "Fruits:\n- apple\n- banana"

  console.log("list =", JSON.stringify(list));
  console.log("rows =", JSON.stringify(rows));
  console.log(list);
}
