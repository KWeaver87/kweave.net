export function toKebabCase(str: string): string {
  return str
    .split(' ')
    .map((s) => s.toLowerCase())
    .join('-')
}

export function dateToIsoDay(date: Date | undefined): string {
  return date
    ? `${date.getUTCFullYear()}-${(date.getUTCMonth() + 1).toString().padStart(2, '0')}-${date
        .getUTCDate()
        .toString()
        .padStart(2, '0')}`
    : ''
}
