import { quickReference } from "./00-quick-reference.js";
import { dateType } from "./01-date-type.js";
import { creatingDates } from "./02-creating-dates.js";
import { currentDate } from "./03-current-date.js";
import { dateParts } from "./04-date-parts.js";
import { dateArithmetic } from "./05-date-arithmetic.js";
import { comparing } from "./06-comparing.js";
import { formatting } from "./07-formatting.js";
import { typingDates } from "./08-typing-dates.js";

// The article's values assume India Standard Time (UTC+05:30)
process.env.TZ = "Asia/Kolkata";

console.log("=== Quick reference ===");
quickReference();
console.log("=== The Date type ===");
dateType();
console.log("=== Creating dates ===");
creatingDates();
console.log("=== Current date and time ===");
currentDate();
console.log("=== Date parts ===");
dateParts();
console.log("=== Adding days, months and years ===");
dateArithmetic();
console.log("=== Comparing dates ===");
comparing();
console.log("=== Formatting ===");
formatting();
console.log("=== Dates in JSON ===");
typingDates();
