// Reusable masking helpers. Each one appears in the article as a snippet.

// 2. Block list of sensitive keys, compared in lower case
export const SENSITIVE_KEYS = new Set(["password", "cardnumber", "cvv", "tokens", "authorization"]);

export function redactKeys(key: string, value: unknown): unknown {
  return SENSITIVE_KEYS.has(key.toLowerCase()) ? "[REDACTED]" : value;
}

// 3. Partial masks
export function maskCard(card: string): string {
  const digits = card.replace(/\D/g, "");
  return digits.slice(-4).padStart(digits.length, "*");
}

export function maskEmail(email: string): string {
  const at = email.indexOf("@");
  if (at < 1) return "[REDACTED]";
  return email[0] + "***" + email.slice(at);
}

export const maskRules: Record<string, (value: string) => string> = {
  password: () => "[REDACTED]",
  cardnumber: maskCard,
  email: maskEmail,
  tokens: () => "[REDACTED]",
};

export function maskFields(key: string, value: unknown): unknown {
  const rule = maskRules[key.toLowerCase()];
  if (!rule) return value;
  return typeof value === "string" ? rule(value) : "[REDACTED]";
}

// 4. Masked deep copy
export function maskDeep<T>(input: T): T {
  const copy = structuredClone(input);
  const walk = (node: unknown): void => {
    if (node === null || typeof node !== "object") return;
    const record = node as Record<string, unknown>;
    for (const [key, value] of Object.entries(record)) {
      if (SENSITIVE_KEYS.has(key.toLowerCase())) record[key] = "[REDACTED]";
      else walk(value);
    }
  };
  walk(copy);
  return copy;
}

// 5. Patterns inside free text
const CARD = /\b(?:\d[ -]?){12,18}\d\b/g;
const EMAIL = /\b([\w.+-])[\w.+-]*@([\w-]+(?:\.[\w-]+)+)\b/g;
const SECRET_PARAM = /\b(password|token)=[^&\s]+/gi;

export function maskText(text: string): string {
  return text
    .replace(CARD, (match) => "****" + match.replace(/\D/g, "").slice(-4))
    .replace(EMAIL, "$1***@$2")
    .replace(SECRET_PARAM, "$1=[REDACTED]");
}
