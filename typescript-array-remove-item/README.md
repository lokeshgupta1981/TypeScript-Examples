# TypeScript - How to Remove Items from Array

Source code for the article [TypeScript - How to Remove Items from Array](https://howtodoinjava.com/typescript/typescript-array-remove-item/).

## Versions

- TypeScript 7.0.2
- Node.js 22 or newer

## Run

```bash
npm install
npm start
```

`npm start` compiles the project and prints the array after each removal shown in the article, including the two bugs (missing -1 check, `splice()` in a forward loop).

## Files

| File | Article section |
|---|---|
| `src/00-quick-reference.ts` | Quick reference at the top of the article |
| `src/01-pop-shift.ts` | 1. `pop()` and `shift()` |
| `src/02-splice-index.ts` | 2. `splice()` by index |
| `src/03-by-value.ts` | 3. `indexOf()`, the -1 bug, `findIndex()` for objects |
| `src/04-filter.ts` | 4. `filter()` for every match, null and undefined |
| `src/05-keep-original.ts` | 5. `toSpliced()`, `slice()`, `filter()` on a copy |
| `src/06-loop.ts` | 6. Removing inside a loop: bug and fix |
| `src/07-delete.ts` | 7. The `delete` operator and sparse arrays |
| `src/08-clear.ts` | 8. `length = 0` vs a new array |
| `src/index.ts` | Runs every section in order |
