export function runtimeKinds(): void {
  const rec: Record<string, number> = { Lokesh: 37 };
  const map = new Map<string, number>([["Lokesh", 37]]);

  const recIsMap = rec instanceof Map;                    // recIsMap = false
  const mapIsMap = map instanceof Map;                    // mapIsMap = true
  const recProto = Object.getPrototypeOf(rec) === Object.prototype;   // recProto = true

  console.log("recIsMap =", recIsMap, "mapIsMap =", mapIsMap, "recProto =", recProto);
}
