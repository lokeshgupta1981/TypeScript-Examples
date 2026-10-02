# TypeScript Map examples

Source code for the article [TypeScript Map (with Examples)](https://howtodoinjava.com/typescript/maps/).

## Versions

- TypeScript 7.0.2
- Node.js 22 or newer (tested on Node.js 22.23)
- Target: ES2024 (needed for `Map.groupBy()`)

## Run

```bash
npm install
npm start     # compiles and runs every demo in src/
npm test      # compiles and runs the tests with the Node.js test runner
```

## Files

| File | What it shows |
|------|---------------|
| `src/00-quick-reference.ts` | Every operation from the article in one place |
| `src/01-create.ts` | Creating a Map, with and without initial entries |
| `src/02-operations.ts` | `set()`, `get()`, `has()`, `delete()`, `clear()`, `size` |
| `src/03-get-undefined.ts` | Handling `undefined` from `get()` |
| `src/04-iterate.ts` | `for...of`, `keys()`, `values()`, `forEach()`, insertion order |
| `src/05-convert.ts` | Map to array, object and JSON, and back |
| `src/06-sort-group.ts` | Sorting a Map and `Map.groupBy()` |
| `src/07-keys.ts` | Key types and object keys compared by reference |
| `src/inventory.ts` | Reusable helpers used by the demos and tests |
| `test/inventory.test.ts` | Tests for the helpers |
