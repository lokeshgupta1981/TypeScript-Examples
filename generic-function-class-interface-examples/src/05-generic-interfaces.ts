export function genericInterfaces(): void {
  // 1. One type parameter
  interface Box<T> {
    value: T;
  }
  const ageBox: Box<number> = { value: 37 };
  console.log(ageBox.value);                    // 37

  // 2. Two type parameters
  interface Entry<K, V> {
    key: K;
    value: V;
  }
  const entry: Entry<string, number> = { key: "Lokesh", value: 37 };
  console.log(entry.key, entry.value);          // Lokesh 37

  // 3. Generic type alias for a function
  type Formatter<T> = (value: T) => string;
  const formatAge: Formatter<number> = (age) => age + " years";
  const text = formatAge(37);                   // text = "37 years"
  console.log(text);
}
