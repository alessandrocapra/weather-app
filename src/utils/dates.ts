export function convertEpochToReadableDate(epoch: number) {
  const date = new Date(epoch * 1000);

  return date.toLocaleDateString("en-GB", { weekday: "short" });
}

export function extractDateFromISOString(date: Date) {
  return date.toISOString().split("T")[0];
}
