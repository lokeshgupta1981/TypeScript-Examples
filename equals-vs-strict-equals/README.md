# Equals Operator ( == ) vs Strict Equals Operator ( === )

Source code for the article [Equals Operator ( == ) vs Strict Equals Operator ( === )](https://howtodoinjava.com/typescript/equals-vs-strict-equals/).

## Versions

- TypeScript 7.0.2
- Node.js 22 or newer

## Run

```bash
npm install
npm start
```

`npm start` compiles the project with `tsc` and runs `dist/src/index.js`, which prints the values shown in the article's snippet comments and the == vs === table.

## Files

| File | Article section |
|---|---|
| src/00-quick-reference.ts | Quick reference snippet |
| src/01-comparison-table.ts | 1. Results of == and === Side by Side |
| src/02-coercion-rules.ts | 2. How == Converts Values |
| src/03-typescript-checks.ts | 3. What the TypeScript Compiler Checks |
| src/04-null-check.ts | 4. The == null Check |
| src/05-nan-and-zero.ts | 5. NaN, -0 and Object.is() |
| src/06-objects.ts | 6. Objects, Arrays and Dates |
| src/index.ts | Runs all sections in order |
