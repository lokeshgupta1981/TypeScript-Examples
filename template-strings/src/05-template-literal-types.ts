type Size = "small" | "large";
type Color = "red" | "blue";

// 1. Build string types from other types
type SizeClass = `size-${Size}`;              // "size-small" | "size-large"
type Combo = `${Size}-${Color}`;              // "small-red" | "small-blue" | "large-red" | "large-blue"

// 2. Patterns with number and string
type Px = `${number}px`;

// 3. Change case with intrinsic types
type Loud = Uppercase<"hello">;               // "HELLO"
type Getter = `get${Capitalize<"name">}`;     // "getName"

// 4. Generate method names from keys
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};
type PersonGetters = Getters<{ name: string; age: number }>;
// { getName: () => string; getAge: () => number }

// 5. Read parts of a string type with infer
type Split<S> = S extends `${infer K}:${infer V}` ? [K, V] : never;
type Pair = Split<"Lokesh:37">;               // ["Lokesh", "37"]

export function templateLiteralTypes(): void {
  const width: Px = "10px";                     // "wide" is a compile error

  console.log("width =", width);
  console.log("SizeClass:", ["size-small", "size-large"] satisfies SizeClass[]);
  console.log("Combo:", ["small-red", "small-blue", "large-red", "large-blue"] satisfies Combo[]);
  console.log("Loud:", "HELLO" satisfies Loud, "| Getter:", "getName" satisfies Getter);
  const getters: PersonGetters = { getName: () => "Lokesh", getAge: () => 37 };
  console.log("getters:", getters.getName(), getters.getAge());
  const pair: Pair = ["Lokesh", "37"];
  console.log("Pair:", pair);
}
