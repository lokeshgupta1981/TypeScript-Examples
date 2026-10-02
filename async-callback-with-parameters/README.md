# TypeScript Callback Function Example

Source code for the article [TypeScript Callback Function Example](https://howtodoinjava.com/typescript/async-callback-with-parameters/).

## Versions

- TypeScript 7.0.2
- Node.js 22 or newer
- @types/node 26.6.4 (for `util.promisify()` and the timer types)

## Run

```bash
npm install
npm start
```

`npm start` compiles the project with `tsc` and runs `dist/src/index.js`. The runner waits 300 ms after each section so that every timer of that section prints before the next header.

## Files

| File | Article section |
|---|---|
| src/00-quick-reference.ts | Callbacks, closures and await at a glance |
| src/01-what-is-a-callback.ts | 1. Synchronous and asynchronous callbacks |
| src/02-callback-types.ts | 2. Typing a callback parameter |
| src/03-passing-parameters.ts | 3. Passing parameters to a callback function |
| src/04-error-first.ts | 4. Error-first callbacks |
| src/05-promises.ts | 5. From callbacks to Promises (including util.promisify()) |
| src/06-async-await.ts | 6. async and await |
| src/07-this.ts | 7. Losing this when passing a method as a callback |
| src/index.ts | Runs all sections in order |
