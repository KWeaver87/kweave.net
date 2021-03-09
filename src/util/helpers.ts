export function toKebabCase(str: string): string {
  return str
    .split(' ')
    .map((s) => s.toLowerCase())
    .join('-')
}
