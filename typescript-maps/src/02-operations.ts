// Section 2: Adding, reading, updating and deleting entries
export function basicOperations(): void {
  const ages = new Map<string, number>();

  // Add and update
  ages.set("Lokesh", 37);
  ages.set("Raj", 35);
  ages.set("Raj", 36); // replaces 35

  // Read
  const age = ages.get("Lokesh"); // age = 37
  const unknown = ages.get("Brian"); // unknown = undefined
  const found = ages.has("Raj"); // found = true
  const count = ages.size; // count = 2
  console.log(age, unknown, found, count);

  // Delete
  const deleted = ages.delete("Raj"); // deleted = true
  const again = ages.delete("Raj"); // again = false
  ages.clear(); // size = 0
  console.log(deleted, again, ages.size);

  // Counting with a default of 0
  const visits = new Map<string, number>();
  visits.set("home", (visits.get("home") ?? 0) + 1);
  visits.set("home", (visits.get("home") ?? 0) + 1);
  const homeVisits = visits.get("home"); // homeVisits = 2
  console.log(homeVisits);
}
