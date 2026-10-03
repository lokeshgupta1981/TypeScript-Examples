# JavaScript Check if Variable is a Number (and NaN Traps)

Source code for the article [JavaScript Check if Variable is a Number (and NaN Traps)](https://howtodoinjava.com/typescript/check-if-variable-is-number/).

## Versions

- TypeScript 7.0.2
- Node.js 22 or newer

The tsconfig.json enables "allowJs" so that the project can include one plain JavaScript file
(src/02-03-global-functions.js). It calls the global isFinite() and isNaN() with strings, which TypeScript does not allow.

## Run

```bash
npm install
npm start
```

## Files

| File | Article section |
|---|---|
| src/00-quick-reference.ts | Quick reference snippet |
| src/01-typeof.ts | 1. What Counts as a Number in JavaScript? |
| src/02-is-finite.ts | 2. Number.isFinite() vs the Global isFinite() |
| src/02-03-global-functions.js | 2 and 3. The global isFinite() and isNaN() (plain JavaScript) |
| src/03-is-nan.ts | 3. Number.isNaN() vs the Global isNaN() |
| src/04-integers.ts | 4. Checking for Integers With Number.isInteger() and Number.isSafeInteger() |
| src/05-numeric-strings.ts | 5. Checking if a String Is a Number |
| src/06-bigint-and-number-objects.ts | 6. BigInt Values and Number Objects |
| src/07-type-guard.ts | 7. Writing a Type Guard for Numbers in TypeScript |
| src/08-comparison-table.ts | 3 and 8. Prints the coercion table and the comparison table |
| src/09-faqs.ts | 9. Number Checking FAQs |
| src/show.ts | Prints values as "name = value" |
| src/index.ts | Runs all examples in order |
