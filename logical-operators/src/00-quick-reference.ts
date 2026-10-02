export function quickReference(): void {
  const isAdmin: boolean = true;
  const isActive: boolean = false;

  // 1. AND, OR, NOT
  const canEdit = isAdmin && isActive;          // canEdit = false
  const canView = isAdmin || isActive;          // canView = true
  const isBlocked = !isActive;                  // isBlocked = true

  // 2. || replaces any falsy value, ?? only null and undefined
  const count: number = 0;
  const shown = count || 10;                    // shown = 10
  const kept = count ?? 10;                     // kept = 0

  // 3. Optional chaining with a default
  const user: { address?: { city: string } } = {};
  const city = user.address?.city ?? "Unknown"; // city = "Unknown"

  // 4. Logical assignment
  let retries: number | undefined;
  retries ??= 3;                                // retries = 3
  let title = "";
  title ||= "Untitled";                         // title = "Untitled"
  let total = 5;
  total &&= total * 2;                          // total = 10

  console.log("canEdit =", canEdit, "canView =", canView, "isBlocked =", isBlocked);
  console.log("shown =", shown, "kept =", kept, "city =", city);
  console.log("retries =", retries, "title =", title, "total =", total);
}
