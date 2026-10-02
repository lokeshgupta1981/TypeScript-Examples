export function heterogeneousEnums(): void {
  enum Answer {
    No = 0,
    Yes = "yes",
  }

  const no = Answer.No;                         // no = 0
  const yes = Answer.Yes;                       // yes = "yes"

  console.log("no =", no, "yes =", yes);
}
