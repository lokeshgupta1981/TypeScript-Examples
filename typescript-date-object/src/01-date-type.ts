export function dateType(): void {
  let created = new Date();                     // type Date (inferred)
  let updated: Date = new Date();               // type Date (explicit)
  let deleted: Date | null = null;              // a date that may not exist yet

  console.log("created is Date =", created instanceof Date, "| updated is Date =", updated instanceof Date, "| deleted =", deleted);
}
