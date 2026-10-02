export function customErrors(): void {
  // 1. Base class for our errors
  class AppError extends Error {
    constructor(message: string, options?: ErrorOptions) {
      super(message, options);
      this.name = new.target.name;
    }
  }

  // 2. Subclasses with extra fields
  class ValidationError extends AppError {
    field: string;
    constructor(field: string, message: string) {
      super(message);
      this.field = field;
    }
  }
  class NotFoundError extends AppError {}

  // 3. Throw and inspect
  function parseAge(text: string): number {
    if (!/^\d+$/.test(text)) {
      throw new ValidationError("age", "Invalid age: " + text);
    }
    return Number(text);
  }

  try {
    parseAge("abc");
  } catch (err) {
    if (err instanceof ValidationError) {
      console.log(err.name);                    // ValidationError
      console.log(err.field);                   // age
      console.log(err.message);                 // Invalid age: abc
      console.log(err instanceof AppError);     // true
      console.log(err instanceof NotFoundError); // false
    }
  }
}

export function errorCause(): void {
  class ConfigError extends Error {
    constructor(message: string, options?: ErrorOptions) {
      super(message, options);
      this.name = "ConfigError";
    }
  }

  function readAges(json: string): Record<string, number> {
    try {
      return JSON.parse(json);
    } catch (err) {
      throw new ConfigError("Cannot read ages", { cause: err });
    }
  }

  try {
    readAges("{bad");
  } catch (err) {
    if (err instanceof ConfigError) {
      console.log(err.message);                 // Cannot read ages
      console.log((err.cause as Error).name);   // SyntaxError
    }
  }
}
