export function objects(): void {
  const lokesh = { name: "Lokesh", age: 37 };

  // 1. Copy and add a property
  const withCity = { ...lokesh, city: "Delhi" };   // { name: "Lokesh", age: 37, city: "Delhi" }

  // 2. Later properties win
  const older = { ...lokesh, age: 38 };         // older.age = 38

  // 3. Merge settings over defaults
  const defaults = { theme: "light", size: 12 };
  const saved = { size: 14 };
  const settings = { ...defaults, ...saved };   // settings = { theme: "light", size: 14 }

  // 4. Add a property only when a condition is true
  const roles = ["admin", "editor"];
  const isAdmin = roles.includes("admin");      // isAdmin = true
  const user = { ...lokesh, ...(isAdmin && { role: "admin" }) };   // user.role = "admin"

  // 5. Remove a property with rest
  const { age, ...withoutAge } = lokesh;        // withoutAge = { name: "Lokesh" }

  console.log("withCity =", withCity, "older.age =", older.age);
  console.log("settings =", settings, "isAdmin =", isAdmin, "user.role =", user.role, "age =", age, "withoutAge =", withoutAge);
}
