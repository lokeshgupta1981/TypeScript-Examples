# TypeScript Compiler Configuration - tsconfig.json

Source code for the article [TypeScript Compiler Configuration - tsconfig.json](https://howtodoinjava.com/typescript/tsconfig-json/).

## Versions

- TypeScript 7.0.2
- Node.js 22 or newer

## Run

```bash
npm install
npm start               # compile with tsconfig.json and run dist/src/index.js
npm run check:strict    # type-check with tsconfig.strict.json (no output when it passes)
```

## Files

| File | Article section |
|---|---|
| `tsconfig.json` | 2. Options Used in the Example Projects |
| `tsconfig.strict.json` | Quick-reference config and 3. Three Stricter Options Worth Turning On |
| `src/01-strict.ts` | 2.3. strict |
| `src/02-unchecked-index.ts` | 3.1. noUncheckedIndexedAccess |
| `src/03-verbatim-module-syntax.ts` | 2.2. module nodenext and 3.2. verbatimModuleSyntax |
| `src/04-erasable-syntax.ts` | 3.3. erasableSyntaxOnly |
| `src/types.ts` | Type and function imported by `03-verbatim-module-syntax.ts` |
| `src/index.ts` | Runs the sections in order |

The error messages in the article come from separate test files that are meant to fail, so they are not part of this project.
