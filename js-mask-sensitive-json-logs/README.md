# Mask Sensitive Data in Logs in JavaScript (JSON and pino)

Source code for the article [Mask Sensitive Data in Logs in JavaScript (JSON and pino)](https://howtodoinjava.com/typescript/mask-sensitive-info-json-logs/).

All data in the examples is fake test data (public test card numbers, example.com emails, 555 phone numbers).

## Versions

- TypeScript 7.0.2
- Node.js 22 or newer
- pino 10.4.0

## Run

```bash
npm install
npm start
npm run bench
```

pino writes its log lines asynchronously, so in the `npm start` output its lines can appear a little after the
`console.log()` lines printed around them.

## Files

| File | Article section |
|---|---|
| src/data.ts | 2.1. The Sample Signup Profile |
| src/mask.ts | Helpers: redactKeys, maskCard, maskEmail, maskFields, maskDeep, maskText |
| src/00-quick-reference.ts | Snippet at the top of the article |
| src/01-replacer.ts | 2.2. Redacting Keys Case-Insensitively, 2.3. Writing Only Allowed Keys |
| src/02-partial-mask.ts | 3. Partial Masking of Card Numbers and Emails |
| src/03-deep-copy.ts | 4. Masking a Copy of the Object With structuredClone() |
| src/04-free-text.ts | 5. Masking Card Numbers and Emails Inside Free Text |
| src/05-tojson.ts | 6. Controlling Serialization With toJSON() in a Class |
| src/06-console.ts | 7.1. Logging With Node's console |
| src/07-pino.ts | 7.2. Redacting Paths With pino, 9.4. pino FAQ |
| src/08-mistakes.ts | 9.3. Why Did Masking Change the Original Object? |
| src/benchmark.ts | 8. Timings (npm run bench) |
| src/index.ts | Runs all examples in order |
