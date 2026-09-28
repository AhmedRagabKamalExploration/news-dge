const TIME_UNITS: Array<{
  unit: Intl.RelativeTimeFormatUnit;
  seconds: number;
}> = [
  { unit: "year", seconds: 60 * 60 * 24 * 365 },
  { unit: "month", seconds: 60 * 60 * 24 * 30 },
  { unit: "week", seconds: 60 * 60 * 24 * 7 },
  { unit: "day", seconds: 60 * 60 * 24 },
  { unit: "hour", seconds: 60 * 60 },
  { unit: "minute", seconds: 60 },
  { unit: "second", seconds: 1 },
];

export function formatRelativeTime(
  isoDate: string,
  baseDate: Date = new Date(),
): string {
  const target = new Date(isoDate);
  if (Number.isNaN(target.getTime())) {
    return isoDate;
  }

  const diffInSeconds = Math.round(
    (target.getTime() - baseDate.getTime()) / 1000,
  );

  const formatter = new Intl.RelativeTimeFormat(undefined, {
    numeric: "auto",
  });

  for (const { unit, seconds } of TIME_UNITS) {
    const delta = diffInSeconds / seconds;
    if (Math.abs(delta) >= 1) {
      return formatter.format(Math.round(delta), unit);
    }
  }

  return formatter.format(0, "second");
}
