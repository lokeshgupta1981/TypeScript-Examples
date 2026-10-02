export function findLastExamples(): void {
  interface LogEntry { level: string; text: string; }

  const logs: LogEntry[] = [
    { level: "error", text: "disk full" },
    { level: "info", text: "retrying" },
    { level: "error", text: "timeout" },
    { level: "info", text: "done" },
  ];

  // 1. Most recent error
  const lastError = logs.findLast((e) => e.level === "error");   // lastError.text = "timeout"

  // 2. Its position
  const lastErrorAt = logs.findLastIndex((e) => e.level === "error");   // lastErrorAt = 2

  // 3. Before ES2023: reverse a copy, then find
  const oldWay = [...logs].reverse().find((e) => e.level === "error");   // oldWay.text = "timeout"

  console.log("lastError =", lastError?.text, "| lastErrorAt =", lastErrorAt, "| oldWay =", oldWay?.text);
}
