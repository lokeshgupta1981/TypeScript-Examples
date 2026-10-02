# JavaScript Variable Hoisting

Source code for the article [JavaScript Variable Hoisting](https://howtodoinjava.com/typescript/javascript-variable-hoisting/).

## Versions

- TypeScript 7.0.2
- Node.js 22 or newer

## Run

```bash
npm install
npm start          # compile and run the TypeScript snippets in src
npm run js         # run js/quick-reference.js and js/hoisting.js
```

## Files

| File | Article section |
|---|---|
| `js/quick-reference.js` | Quick-reference snippet (failing lines commented out) |
| `js/hoisting.js` | Runs every hoisting case, including the failing ones, and prints the result or the error |
| `src/01-function-hoisting.ts` | 4. Hoisting of Functions |
| `src/02-tdz-timing.ts` | 3. let, const and the Temporal Dead Zone |
| `src/index.ts` | Runs the TypeScript sections in order |

Most hoisting cases do not compile in TypeScript strict mode (errors TS2448, TS2449, TS2454), which is why they live in plain JavaScript files.
