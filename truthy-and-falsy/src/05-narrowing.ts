export function truthinessNarrowing(): void {
  // 1. Narrowing string | undefined
  function shout(name?: string): string {
    if (name) {
      return name.toUpperCase();                // name: string
    }
    return "NO NAME";                           // also reached for ""
  }
  const s1 = shout("raj");                      // s1 = "RAJ"
  const s2 = shout("");                         // s2 = "NO NAME"

  // 2. Bug: 0 is a valid count but falsy
  function wrong(count?: number): string {
    return count ? count + " items" : "unknown";
  }
  const w = wrong(0);                           // w = "unknown"

  // 3. Fix: check for undefined only
  function right(count?: number): string {
    return count !== undefined ? count + " items" : "unknown";
  }
  const r = right(0);                           // r = "0 items"

  console.log("s1 =", s1, "s2 =", s2, "w =", w, "r =", r);
}
