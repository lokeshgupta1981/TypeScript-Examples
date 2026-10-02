# TypeScript filter() Example: Filter Array of Objects by Property

Source code for the article [TypeScript filter() Example: Filter Array of Objects by Property](https://howtodoinjava.com/typescript/array-filter/).

## Versions

- TypeScript 7.0.2
- Node.js 22 or newer

## Run

```bash
npm install
npm start
```

`npm start` compiles the project and prints the result of every filter shown in the article (for arrays of objects, the names that remain).

## Files

| File | Article section |
|---|---|
| `src/people.ts` | The `people` array used in sections 2 and 3, and a helper that prints names |
| `src/00-quick-reference.ts` | Snippet at the top of the article |
| `src/01-how-filter-works.ts` | 1. Callback arguments, empty result, named predicate |
| `src/02-by-property.ts` | 2. Property conditions and the generic `filterBy()` helper |
| `src/03-lists-nested.ts` | 3. List of values, nested, array and optional properties |
| `src/04-strings.ts` | 4. Case-insensitive string filters |
| `src/05-narrowing.ts` | 5. Inferred type predicates, `filter(Boolean)`, explicit type guard |
| `src/06-mistakes.ts` | 6. Missing `return` and `async` callbacks |
| `src/index.ts` | Runs every section in order |
