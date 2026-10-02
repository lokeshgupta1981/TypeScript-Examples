export function andOrNot(): void {
  const isAdmin: boolean = true;
  const isActive: boolean = false;
  const isOwner: boolean = true;

  // 1. Combine conditions
  const canDelete = isAdmin && isActive;        // canDelete = false
  const canView = isAdmin || isActive;          // canView = true
  const isBlocked = !isActive;                  // isBlocked = true

  // 2. Precedence: ! first, then &&, then ||
  const r1 = isOwner || isAdmin && isActive;    // r1 = true
  const r2 = (isOwner || isAdmin) && isActive;  // r2 = false

  console.log("canDelete =", canDelete, "canView =", canView, "isBlocked =", isBlocked);
  console.log("r1 =", r1, "r2 =", r2);
}
