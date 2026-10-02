export function syntax(): void {
  const name = "Lokesh";
  const age = 37;

  // 1. Concatenation
  const s1 = "My name is " + name + " and I am " + age;

  // 2. Template string
  const s2 = `My name is ${name} and I am ${age}`;
  // s1 and s2 = "My name is Lokesh and I am 37"

  // 3. Backticks and placeholders as plain text
  const quote = `Use \`backticks\` here`;       // quote = "Use `backticks` here"
  const literal = `Price: \${10}`;              // literal = "Price: ${10}"

  console.log("s1 =", JSON.stringify(s1), "same:", s1 === s2);
  console.log("quote =", quote, "literal =", literal);
}
