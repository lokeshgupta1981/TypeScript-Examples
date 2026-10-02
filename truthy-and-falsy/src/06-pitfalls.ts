export function pitfalls(): void {
  const fruits: string[] = [];
  const stock: Record<string, number> = {};

  // 1. Empty arrays and objects are truthy
  const listCheck = fruits ? "yes" : "no";      // listCheck = "yes"
  const isEmptyList = fruits.length === 0;      // isEmptyList = true
  const isEmptyObject = Object.keys(stock).length === 0;   // isEmptyObject = true

  // 2. filter(Boolean) also removes 0
  const ages = [37, 0, 40, null];
  const truthyOnly = ages.filter(Boolean);      // truthyOnly = [37, 40]
  const present = ages.filter((a) => a != null);   // present = [37, 0, 40]

  console.log("listCheck =", listCheck, "isEmptyList =", isEmptyList, "isEmptyObject =", isEmptyObject);
  console.log("truthyOnly =", truthyOnly, "present =", present);
}
