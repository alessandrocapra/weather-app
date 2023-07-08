export function convertEpochToReadableDate(epoch: number) {
  const date = new Date(epoch * 1000);

  return date.toLocaleDateString("en-GB", { weekday: "short" });
}
