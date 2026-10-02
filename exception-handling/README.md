# TypeScript Exception Handling (+ Custom Exceptions)

Source code for the article [TypeScript Exception Handling (+ Custom Exceptions)](https://howtodoinjava.com/typescript/exception-handling/).

## Versions

- TypeScript 7.0.2
- Node.js 22 or newer

## Run

```bash
npm install
npm start
```

`npm start` compiles the project with `tsc` and runs `dist/src/index.js`, which prints the result of every section.

## Files

| File | Article section |
|---|---|
| src/00-quick-reference.ts | Error handling in one snippet |
| src/01-try-catch-finally.ts | 1. How try, catch and finally run |
| src/02-unknown-in-catch.ts | 2. The catch variable is unknown |
| src/03-built-in-errors.ts | 3. Built-in error types and throwing errors |
| src/04-custom-errors.ts | 4. Custom error classes, 4.1. cause |
| src/05-narrowing.ts | 5. Handling several error types with instanceof |
| src/06-finally.ts | 6. finally: cleanup and two surprises |
| src/07-async-errors.ts | 7. Errors in async code, 7.1. missing await |
| src/08-result.ts | 8. Returning a result instead of throwing |
| src/index.ts | Runs all sections in order |
