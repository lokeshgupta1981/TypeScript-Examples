# TypeScript vs. JavaScript: Side-by-Side Comparison

Source code for the article [TypeScript vs. JavaScript: Side-by-Side Comparison](https://howtodoinjava.com/typescript/difference-between-typescript-and-javascript/).

## Versions

- TypeScript 7.0.2
- Node.js 22 or newer

## Run

```bash
npm install
npm start          # compile the TypeScript files in src and run them
npm run js         # run the JavaScript files in js with Node.js
```

## Files

| File | Article section |
|---|---|
| `src/00-quick-reference.ts` | Quick-reference snippet |
| `src/01-static-typing.ts` | 2. Dynamic Typing vs Static Typing |
| `src/02-compiled-output.ts` | 4. The Compile Step and How Each Language Runs |
| `src/03-runtime-checks.ts` | 5. Runtime Behavior and Performance |
| `src/04-typescript-features.ts` | 6. Features That Exist Only in TypeScript |
| `src/index.ts` | Runs the sections in order |
| `js/dynamic-typing.js` | 2. Dynamic Typing vs Static Typing (JavaScript side) |
| `js/price.js` | 7. Using JavaScript and TypeScript in One Project (JSDoc types with `// @ts-check`) |

The "Code that does not compile" snippets in the article are not in this project, because they are meant to fail. Their error messages were copied from real `tsc` 7.0.2 runs.
