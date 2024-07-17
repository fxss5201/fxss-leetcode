export function leftFillZero (str: string, length: number): string {
  while (str.length < length) {
    str = `0${str}`
  }
  return str
}
