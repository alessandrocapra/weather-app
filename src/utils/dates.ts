export function convertEpochToReadableDate(epoch: number) {
  const date = new Date(epoch * 1000);

  return date.toLocaleDateString("en-GB", { weekday: "short" });
}

export function extractDateFromISOString(date: Date) {
  return date.toISOString().split("T")[0];
}

export function getDayNameFromDate(dateString: string): string {
  const date = new Date(dateString);
  const tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 1);

  const tomorrowFormatted = tomorrow.toISOString().split("T")[0];
  const currentFormatted = date.toISOString().split("T")[0];

  if (currentFormatted === tomorrowFormatted) {
    return "Tomorrow";
  } else {
    const formatter = new Intl.DateTimeFormat("en", { weekday: "short" });
    return formatter.format(date);
  }
}
