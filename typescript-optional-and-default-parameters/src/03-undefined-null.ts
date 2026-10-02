export function undefinedVsNull(): void {
  function city(name: string, home: string | null = "Delhi"): string {
    return name + " lives in " + home;
  }

  const c1 = city("Lokesh");                    // c1 = "Lokesh lives in Delhi"
  const c2 = city("Raj", undefined);            // c2 = "Raj lives in Delhi"
  const c3 = city("John", null);                // c3 = "John lives in null"
  console.log(c1, c2, c3);

  // Default for both null and undefined
  function city2(name: string, home?: string | null): string {
    return name + " lives in " + (home ?? "Delhi");
  }
  const c4 = city2("John", null);               // c4 = "John lives in Delhi"
  console.log(c4);
}
