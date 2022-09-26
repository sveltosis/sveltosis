// helper functions for strings

export function insertAt(string_: string, sub: string, pos: number) {
  return `${string_.slice(0, pos)}${sub}${string_.slice(pos)}`;
}
