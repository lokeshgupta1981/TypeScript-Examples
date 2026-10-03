# How to Declare a JavaScript Global Variable With globalThis

Source code for the article [How to Declare a JavaScript Global Variable With globalThis](https://howtodoinjava.com/typescript/javascript-correct-way-to-define-global-variables/).

## Versions

- TypeScript 7.0.2
- Node.js 22 or newer

## Run

```bash
npm install
npm start            # compile and run the TypeScript snippets
npm run start:env    # the same with app.env loaded through node --env-file
npm run js           # classic script, CommonJS and ES module scope in plain JavaScript
npm run check:web    # type-check the window typing with the dom library
```

Open `web/index.html` in a browser and check the console to see the browser behavior of top-level `var`, `let` and `const`.

## Files

| File | Article section |
|---|---|
| `src/00-quick-reference.ts` | Quick-reference snippet |
| `src/01-module-scope.ts` | 1.1. Classic Scripts, ES Modules and CommonJS Files |
| `src/02-global-this.ts` | 2. Creating a Global Variable With globalThis |
| `src/03-shadowing.ts` | 4. Shadowing a Global Variable |
| `src/config.ts`, `src/04-config-module.ts` | 5.1. A Config Module With Object.freeze() |
| `src/counter.ts`, `src/05-singleton-counter.ts` | 5.2. A Singleton Module for Shared State |
| `src/06-env-variables.ts`, `app.env` | 5.3. Environment Variables for Configuration |
| `src/global.d.ts` | 6.1. Declaring a Global With declare global |
| `src/index.ts` | Runs the sections in order |
| `js/global-scope.cjs` | Classic script scope (through `vm.runInThisContext`), implicit globals, strict mode, CommonJS scope |
| `js/module-scope.mjs` | ES module scope |
| `web/index.html` | Classic and module scripts in the browser |
| `web/window.d.ts`, `web/app.ts`, `web/tsconfig.json` | 6.2. Typing Properties on window |

Lines marked with an error code in the comments are commented out, because they do not compile.
