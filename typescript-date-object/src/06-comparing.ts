export function comparing(): void {
  const a = new Date(2026, 9, 3);
  const b = new Date(2026, 9, 3);
  const c = new Date(2026, 9, 10);

  const sameObject = a === b;                   // sameObject = false, two objects
  const sameTime = a.getTime() === b.getTime(); // sameTime = true
  const earlier = a < c;                        // earlier = true
  const latest = new Date(Math.max(a.getTime(), c.getTime()));   // latest = 10 October 2026

  // Sort dates, oldest first
  const sorted = [c, a].toSorted((x, y) => x.getTime() - y.getTime());

  console.log("sameObject =", sameObject, "| sameTime =", sameTime, "| earlier =", earlier);
  console.log("latest =", latest.toDateString(), "| sorted =", sorted.map((d) => d.toDateString()));
}
