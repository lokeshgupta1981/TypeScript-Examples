export function nullishCoalescing(): void {
  const settings = new Map<string, number>([["volume", 0]]);

  // 1. || drops a valid 0
  const volume1 = settings.get("volume") || 50; // volume1 = 50

  // 2. ?? keeps it
  const volume2 = settings.get("volume") ?? 50; // volume2 = 0
  const brightness = settings.get("brightness") ?? 70;   // brightness = 70

  // 3. Mixing ?? with || needs parentheses
  const nickname: string = "";
  const shown = (nickname || null) ?? "Guest";  // shown = "Guest"

  console.log("volume1 =", volume1, "volume2 =", volume2, "brightness =", brightness, "shown =", shown);

  const values = [0, "", false, Number.NaN, null, undefined];
  for (const v of values) {
    console.log(String(v).padEnd(9), "|| ->", v || "default", " ?? ->", v ?? "default");
  }
}
