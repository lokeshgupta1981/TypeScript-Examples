# TypeScript Union Types

Source code for the article [TypeScript Union Types](https://howtodoinjava.com/typescript/union-types/).

## Versions

- TypeScript 7.0.2
- Node.js 22 or newer

## Run

```bash
npm install
npm start
```

`npm start` compiles the project in strict mode and prints the values shown in the article's snippet comments.

## Files

| File | Article section |
|---|---|
| `src/00-quick-reference.ts` | Union types in one snippet |
| `src/01-declaring.ts` | 1. Declaring TypeScript union types |
| `src/02-shared-members.ts` | 2. What we can do with a union value |
| `src/03-typeof.ts` | 3.1. typeof for primitive members |
| `src/04-instanceof-isarray.ts` | 3.2. Array.isArray() and instanceof |
| `src/05-in-operator.ts` | 3.3. The in operator for object types |
| `src/06-type-predicates.ts` | 3.4. Custom type guards |
| `src/07-discriminated.ts` | 4. Discriminated unions |
| `src/08-exhaustive.ts` | 5. Exhaustive checks with never |
| `src/09-intersection.ts` | 6. Union vs intersection types |
| `src/index.ts` | Runs all sections in order |

The "Code that does not compile" examples from the article are not included, because they would stop the build.
