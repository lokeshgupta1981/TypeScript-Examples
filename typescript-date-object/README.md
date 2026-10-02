# TypeScript Date (with Examples)

Source code for the article [TypeScript Date (with Examples)](https://howtodoinjava.com/typescript/typescript-date-object/).

## Versions

- TypeScript 7.0.2
- Node.js 22 or newer

## Run

```bash
npm install
npm start
```

`src/index.ts` sets `process.env.TZ = "Asia/Kolkata"` (India Standard Time, UTC+05:30) before running the snippets, so the values that depend on the time zone match the comments in the article. Lines that use the current time print different values on every run.

## Files

| File | Article section |
|---|---|
| `src/00-quick-reference.ts` | Quick-reference snippet |
| `src/01-date-type.ts` | 1. The Date Type in TypeScript |
| `src/02-creating-dates.ts` | 2. Creating Date Objects |
| `src/03-current-date.ts` | 3. Getting the Current Date and Time |
| `src/04-date-parts.ts` | 4. Reading Date and Time Parts |
| `src/05-date-arithmetic.ts` | 5. Adding and Subtracting Days, Months and Years |
| `src/06-comparing.ts` | 6. Comparing Two Dates |
| `src/07-formatting.ts` | 7. Formatting a Date |
| `src/08-typing-dates.ts` | 8. Dates in JSON and API Data |
| `src/index.ts` | Sets the time zone and runs the sections in order |
