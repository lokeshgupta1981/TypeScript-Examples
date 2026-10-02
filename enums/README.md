# TypeScript Enums

Source code for the article [TypeScript Enums](https://howtodoinjava.com/typescript/enums/).

## Versions

- TypeScript 7.0.2
- Node.js 22 or newer (22.18 or newer for the `strip:*` scripts, which use built-in type stripping)

## Run

```bash
npm install
npm start                  # compile src/ with tsc and run it
npm run strip:enum         # expected to fail: enum is not supported in strip-only mode
npm run strip:as-const     # prints "medium"
npm run check:erasable     # expected to fail with TS1294 for strip-demo/enum.ts
```

`npm start` compiles the project in strict mode and prints the values shown in the article's snippet comments.

## Files

| File | Article section |
|---|---|
| `src/00-quick-reference.ts` | Enums at a glance |
| `src/01-numeric.ts` | 1. Numeric enums |
| `src/02-string.ts` | 2. String enums |
| `src/03-heterogeneous.ts` | 3. Heterogeneous enums |
| `src/04-reverse-iterate.ts` | 4.1. Reverse mapping and iterating over an enum |
| `src/05-string-to-enum.ts` | 5. Converting a string to an enum |
| `src/06-const-enum.ts` | 6. const enums |
| `src/07-as-const.ts` | 8. The as const object as an enum replacement |
| `src/index.ts` | Runs all sections in order |
| `strip-demo/enum.ts` | 7. An enum run with Node.js type stripping (fails) |
| `strip-demo/as-const.ts` | 8. The erasable alternative run with type stripping (works) |
| `tsconfig.erasable.json` | 7. Type check of `strip-demo/` with `erasableSyntaxOnly` |

The "Code that does not compile" examples from the article are not included, because they would stop the build.
